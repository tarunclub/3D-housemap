import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const session = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user?.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="h-screen overflow-scroll scrollbar-hide bg-[#000] text-white">
      <Header />
      <main className="max-w-6xl lg:flex mx-auto font-Poppins ">
        {/* Left */}
        <div className="flex-grow m-5 rounded-lg">
          <Image
            src="https://links.papareact.com/ikj"
            width={920}
            height={250}
            objectFit="contain"
          />

          <div className="p-5 space-y-10 ">
            <h1 className="text-3xl border-b border-gray-600 pb-4 font-Ubuntu font-bold">
              {items.length === 0 ? "Your Basket is empty" : "Shopping Basket"}
            </h1>

            {items.map(({ title, category, rating, price, image, id }, i) => (
              <CheckoutProduct
                key={i}
                id={id}
                title={title}
                rating={rating}
                price={price}
                category={category}
                image={image}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col p-10 ">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold">
                  <div className="mb-3">
                    <p>₹{total}</p>
                  </div>
                </span>
              </h2>
              <form action="/api/auth/create-checkout-session" method="POST">
                <button
                  onClick={createCheckoutSession}
                  type="submit"
                  className="btn mt-2 whitespace-nowrap"
                  disabled={!session}
                >
                  {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
