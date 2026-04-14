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
        const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

        if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
            console.error("Missing Resend API Key or Audience ID in environment variables.");
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Internal server error: Missing configuration" }),
            };
        }

        // Add contact to Resend Audience
        const response = await fetch(`https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`, {
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
