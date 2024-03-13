const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const POST = async (req: any, res: any) => {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1OtyjtRvLi4HOMUFeaYXJ76h',
            quantity: 1,
          },
        ],
        payment_method_types: ["card"],
        success_url: `${req.headers.get("origin")}/upload/success`,
        cancel_url: `${req.headers.get("origin")}/upload/canceled`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      return new Response(JSON.stringify(session), { status: 200 });
    } catch (err) {
      console.log(err);
      return new Response("Failed to checkout", { status: 500 });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
