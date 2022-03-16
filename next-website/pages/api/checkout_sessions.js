const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: 'price_1KYldpLg7d5mxPPnSFI1SLfg',
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `https://stripe.com/docs/payments?payments=online`,
                cancel_url: `https://www.notion.so/Work-Agenda-Road-Map-089e84f4607a48f28477af6cb3c504cf`,
            });
            res.redirect(303, session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}