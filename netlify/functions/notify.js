import { articles } from "../../lib/data";

export const handler = async (event) => {
    // Check for authorization secret
    const NOTIFY_SECRET = process.env.NOTIFY_SECRET;
    const { key } = event.queryStringParameters || {};

    if (!NOTIFY_SECRET || key !== NOTIFY_SECRET) {
        return {
            statusCode: 401,
            body: JSON.stringify({ error: "Unauthorized access. Missing or invalid secret key." }),
        };
    }

    try {
        // Get the latest article
        const latestArticle = articles[articles.length - 1];

        if (!latestArticle) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: "No articles found to notify." }),
            };
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

        if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Missing Resend API Key or Audience ID" }),
            };
        }

        // 1. Fetch all subscribers from the Resend Audience
        const fetchSubscribersResponse = await fetch(`https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`, {
            headers: {
                "Authorization": `Bearer ${RESEND_API_KEY}`,
            },
        });

        const subscribersData = await fetchSubscribersResponse.json();

        if (!fetchSubscribersResponse.ok) {
            console.error("Resend List Error:", subscribersData);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Failed to fetch subscriber list" }),
            };
        }

        const recipients = subscribersData.data
            .filter(contact => !contact.unsubscribed)
            .map(contact => contact.email);

        if (recipients.length === 0) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "No active subscribers to notify." }),
            };
        }

        // 2. Prepare the email content
        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .card { border: 1px solid #e1e1e1; border-radius: 12px; overflow: hidden; margin-top: 20px; }
                .content { padding: 24px; }
                .category { font-size: 12px; font-weight: bold; color: #2563eb; text-transform: uppercase; margin-bottom: 8px; }
                .title { font-size: 24px; font-weight: bold; color: #111; margin-bottom: 12px; text-decoration: none; display: block; }
                .summary { color: #666; margin-bottom: 24px; }
                .btn { display: inline-block; background-color: #000; color: #fff !important; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; }
                .footer { font-size: 12px; color: #999; margin-top: 40px; text-align: center; }
              </style>
            </head>
            <body>
              <p>Hey! We just published a new article on <strong>VikizCode</strong> that you might like:</p>
              
              <div class="card">
                ${latestArticle.image ? `<img src="${latestArticle.image.startsWith('/') ? 'https://vikizcode.netlify.app' + latestArticle.image : latestArticle.image}" style="width: 100%; height: auto;" />` : ''}
                <div class="content">
                  <div class="category">${latestArticle.category}</div>
                  <a href="https://vikizcode.netlify.app/article/${latestArticle.slug}" class="title">${latestArticle.title}</a>
                  <p class="summary">${latestArticle.summary || ""}</p>
                  <a href="https://vikizcode.netlify.app/article/${latestArticle.slug}" class="btn">Read Article</a>
                </div>
              </div>
              
              <div class="footer">
                <p>You received this because you subscribed to VikizCode. Stay geeky 🚀</p>
                <p>&copy; 2026 VikizCode. All rights reserved.</p>
              </div>
            </body>
            </html>
        `;

        // 3. Send email to all recipients in batches (or one batch if small)
        // Resend supports sending to up to 50 recipients in a single call. 
        // For larger lists, this would need iteration.
        const sendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "VikizCode <updates@resend.dev>", // Replace with your verified domain address later
                to: recipients,
                subject: `New Blog Alert: ${latestArticle.title} 🚀`,
                html: emailHtml,
            }),
        });

        const sendData = await sendResponse.json();

        if (!sendResponse.ok) {
            console.error("Resend Send Error:", sendData);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Failed to send emails." }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Successfully notified ${recipients.length} subscribers!` }),
        };
    } catch (error) {
        console.error("Notify function error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal server error: " + error.message }),
        };
    }
};
