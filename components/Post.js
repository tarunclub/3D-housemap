import { HeartIcon, UserCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import img1 from "../img/imageOne.jpg";

function Post({ name, img }) {
  return (
    <div className="my-4 shadow-gray-600 shadow-lg rounded-lg px-2 py-1.5 cursor-pointer">
      {/* Post Header */}
      <div className="flex align-center justify-between mb-[2px]">
        <div>
          <UserCircleIcon className="h-8 text-gray-700" />
        </div>
        <div className="">
          <p className="font-Poppins">{name}</p>
        </div>
        <div>
          <HeartIcon className="h-7 text-red-900" />
        </div>
      </div>
      {/* Post Body */}
      <div>
        <Image src={img} height={350} width={350} className="rounded-lg" />
      </div>
      {/* Post Bottom */}
      <div>
        <button className="bg-blue-800 px-2 py-[2px] font-Poppins text-white text-sm rounded-full">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Post;
