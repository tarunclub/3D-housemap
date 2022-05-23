import Image from "next/image";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import plan1 from "../img/plan1.jpg";
import plan2 from "../img/plan2.jpg";
import plan3 from "../img/plan3.jpg";

function Product() {
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
    <div className="top-0 overflow-y-scroll h-screen scrollbar-hide">
      <Header />
      <main className="flex flex-row p-4">
        {/* Left Section */}
        <section className="w-[550px] shadow-md shadow-gray-500 rounded-lg mr-">
          <Carousel interval={3000}>
            <div className="">
              <img
                src="https://i.pinimg.com/474x/6a/f8/8b/6af88bc45482179262233f8acbdca52c.jpg"
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/474x/1a/8c/84/1a8c84b45d87bb1b8668ff4a241a15e8.jpg"
                className=" object-contain rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/474x/0a/73/be/0a73bed166891727fd3e99586d4b51a8.jpg"
                className="object-contain rounded-lg"
              />
            </div>
          </Carousel>
        </section>

        {/* Right Section */}
        <section className="relative flex flex-col w-[670px] font-Poppins shadow-md shadow-gray-500 p-4 rounded-lg mx-auto space-y-8">
          <p className="font-Poppins font-bold text-lg">
            27x24 Home Plan-493 sqft house Exterior Design at New Delhi
          </p>
          <div className="flex items-center space-x-4">
            <button className="btn px-3">Modify Plan</button>

            <button className="btn px-3" onClick={makePayment}>
              Buy Now
            </button>
          </div>
          <div>
            <p className="font-semibold">Project Description</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              architecto alias earum, consectetur ad praesentium quas cum quod
              rerum hic voluptatum! Consequatur fugiat facilis ullam maxime
              repellat, similique fugit dignissimos.
            </p>
          </div>
          <div className="flex flex-row justify-around items-center">
            <p>Plan Description</p>
            <p>Floor Description</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Product;
