import Image from "next/image";

function SmallCard({ img, heading, desc }) {
  return (
    <div className="flex items-center m-2 px-2 py-1 space-x-4 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-purple-800 hover:scale-105 transition transform duration-200 ease-out shadow-sm shadow-gray-500">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right */}
      <div className=" font-Poppins items-center">
        <h2>{heading}</h2>
        <h3 className="text-sm">{desc}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
