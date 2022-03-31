import { PlayIcon } from "@heroicons/react/solid";
import Image from "next/image";
import img1 from "../img/imageOne.jpg";

function Body() {
  return (
    <main>
      {/* Top Section */}
      <section
        className="flex flex-row"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/187170.jpg')",
          filter: "blur('100px')",
          opacity: "50px",
          webkitFilter: "blur('100px')",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no - repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-10">
          {/* Tag Line */}
          <p className="font-Ubuntu text-white text-[45px] font-semibold  mt-[120px]">
            Discover, buy and sell extraordinary ground plans
          </p>
          {/* Desc */}
          <p className="font-Poppins text-white font-semibold mt-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            ex.
          </p>
          <div className="flex space-x-9 mt-[50px]">
            <button className="bg-blue-600 px-4 py-2 text-xl rounded-lg text-white font-Poppins font-semibold">
              Explore
            </button>
            <button className="bg-blue-600 px-4 py-2 text-xl rounded-lg text-white font-Poppins font-semibold">
              Create
            </button>
          </div>

          {/* Bottom */}
          <div className="flex mt-[80px] cursor-pointer">
            <p className="font-Poppins font-bold text-blue-600 ">
              Learn more about Ghar Naksha
            </p>
            <PlayIcon className="h-6 text-blue-600 ml-1" />
          </div>
        </div>
        <div className="font-Ubuntu text-5xl">
          <div className="mx-[20px] mt-[50px]">
            <Image
              src={img1}
              height={700}
              width={700}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body;
