import Image from "next/image";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import plan1 from "../img/plan1.jpg";
import plan2 from "../img/plan2.jpg";
import plan3 from "../img/plan3.jpg";

function product() {
  return (
    <div className="top-0 overflow-y-scroll h-screen scrollbar-hide">
      <Header />
      <main className="grid grid-cols-2 p-2">
        {/* Left Section */}
        <section className="grid-cols-1 mt-6 ml-4">
          <div className="h-[300px] w-[400px]">
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={true}
              showThumbs={true}
              interval={3000}
            >
              <div>
                <Image loading="lazy" src={plan1} objectFit="contain" />
              </div>
              <div>
                <Image loading="lazy" src={plan2} objectFit="contain" />
              </div>
              <div>
                <Image loading="lazy" src={plan3} objectFit="contain" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex flex-col mt-6 items-center relative font-Poppins p-8 rounded-lg shadow-gray-500 shadow-md">
          <p className="text-lg font-bold mt-4 text-green-600">
            17x29 Home plan-493 sqft house Exterior Design at New Delhi
          </p>
          <div className="flex space-x-20 mt-7">
            <button className="btn px-6">Modify Plan</button>
            <button className="btn px-6">Get Working Drawings</button>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-green-600">Project Description</p>
            <p className="text-sm text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem ipsa non magni optio. Iusto illo, tempore
              distinctio autem accusantium facilis obcaecati dolorum omnis ipsa!
              Voluptatum iusto magnam accusamus esse natus!
            </p>
          </div>
          <div className="grid grid-cols-2 space-x-20 mt-8">
            <div className="grid-cols-1">
              <p className="font-semibold text-green-600">Plan Description</p>
            </div>
            <div className="grid-cols-1">
              <p className="font-semibold text-green-600">Floor Description</p>
            </div>
          </div>
          <div className="flex mt-24 space-x-20 justify-around">
            <button className="btn px-10">Buy Now</button>
            <button className="btn px-10">Add to Cart</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default product;
