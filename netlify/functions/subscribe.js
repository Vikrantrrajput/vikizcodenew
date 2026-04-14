export const handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" }),
        };
    }

    try {
        const { email } = JSON.parse(event.body);

        if (!email) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Email is required" }),
            };
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        let audienceId = process.env.RESEND_AUDIENCE_ID;

        if (!RESEND_API_KEY) {
            console.error("Missing RESEND_API_KEY in environment variables.");
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Missing configuration" }),
            };
        }

        // Auto-detect audience if ID is missing
        if (!audienceId) {
            console.log("No Audience ID found in env, attempting to auto-detect...");
            const audienceResponse = await fetch("https://api.resend.com/audiences", {
                headers: { "Authorization": `Bearer ${RESEND_API_KEY}` }
            });
            const audiencesData = await audienceResponse.json();

            if (audiencesData.data && audiencesData.data.length > 0) {
                audienceId = audiencesData.data[0].id;
                console.log(`Auto-detected Audience: ${audiencesData.data[0].name} (${audienceId})`);
            } else {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: "No audiences found in your Resend account. Please create one first." }),
                };
            }
        }

        // Add contact to Resend Audience
        const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                unsubscribed: false,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            // Specific check for already existing contact
            if (response.status === 422 || (data.message && data.message.toLowerCase().includes("already exists"))) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: "ALREADY_SUBSCRIBED" }),
                };
            }
            console.error("Resend Audience Error:", data);
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: data.message || "Failed to add subscriber" }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Successfully subscribed!" }),
        };
    } catch (error) {
        console.error("Subscribe function error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal server error" }),
        };
    }
};
