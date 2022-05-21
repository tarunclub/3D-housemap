// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";

function Checkout({ onClick }) {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const session = useSession();

  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
      name: "3D HouseMap Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your order",
      image: "",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Tarun",
        email: "tarunk1004@gmail.com",
        contact: "9871726301",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <div className="h-screen overflow-scroll scrollbar-hide">
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

              <button
                onClick={makePayment}
                type="submit"
                className="btn mt-2 whitespace-nowrap"
                disabled={!session}
              >
                {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
