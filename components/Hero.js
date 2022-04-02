import { PlayIcon } from "@heroicons/react/solid";
import Image from "next/image";
import img1 from "../img/imageOne.jpg";
import Cards from "./Cards";
import Post from "./Post";
import nft1 from "../img/nft1.jpg";
import nft2 from "../img/nft2.jpg";
import nft3 from "../img/nft3.jpg";
import nft4 from "../img/nft4.jpg";
import nft5 from "../img/nft5.jpg";
import nft6 from "../img/nft6.jpg";
import nft7 from "../img/nft7.jpg";
import Footer from "./Footer";
import Posts from "./Posts";

function Body() {
  return (
    <main className="h-screen">
      {/* Top Section */}
      <section className="flex flex-row bg-[url('../img/background.png')] bg-no-repeat bg-cover py-8">
        <div className="mx-10">
          {/* Tag Line */}
          <p className="font-Ubuntu text-[45px] font-semibold  mt-[120px]">
            Discover, buy and sell extraordinary ground plans
          </p>
          {/* Desc */}
          <p className="font-Poppins text-white font-semibold mt-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            ex.
          </p>
          <div className="flex space-x-9 mt-[50px]">
            <button className="bg-blue-600 px-8 py-2 mr-4 text-md rounded-lg text-white font-Poppins font-semibold border-gray-400 hover:bg-white hover:shadow-md hover:shadow-gray-700 hover:text-blue-600 transform transition duration-200">
              Explore
            </button>
            <button className="border-[1px] border-gray-400 text-blue-600 px-8 py-2 text-md rounded-lg font-Poppins font-semibold hover:bg-blue-600 hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
              Create
            </button>
          </div>

          {/* Bottom */}
          <div className="flex mt-[80px] cursor-pointer hover:">
            <p className="font-Poppins font-bold text-white ">
              Learn more about Ghar Naksha
            </p>
            <PlayIcon className="h-6 text-red-600 ml-1 hover:transition duration-75 hover:rotate-45" />
          </div>
        </div>

        {/* Right Side */}
        <div className="font-Ubuntu text-5xl">
          <div className="mx-[20px] mt-[30px] shadow-gray-800 rounded-lg shadow-lg">
            <Image
              src={img1}
              height={700}
              width={700}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="flex flex-col my-[40px] mx-10">
        <div className=" mx-auto ">
          <p className="text-3xl font-Nunito text-gray-700">Trending</p>
        </div>
        {/* Cards */}
        <div className="flex space-x-6 overflow-scroll my-10 scrollbar-hide px-3 py-4 rounded-lg border-[1px] border-gray-400">
          <Cards img={nft1} title="dognft" />
          <Cards img={nft2} title="dognft" />
          <Cards img={nft3} title="dognft" />
          <Cards img={nft4} title="dognft" />
        </div>
      </section>

      {/* Collections */}
      <div className="flex flex-col ">
        <div className=" mx-auto ">
          <p className="text-3xl font-Nunito text-gray-700">Collections</p>
        </div>
        <div className="flex col-2 mt-[30px] space-x-8 mx-10">
          <Posts />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Body;
