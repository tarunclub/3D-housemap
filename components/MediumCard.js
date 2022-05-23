import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="flex flex-col cursor-pointer items-center hover:scale-105 transform transition duration-300 ease-out shadow-sm shadow-gray-500 px-2 py-1 rounded-lg hover:shadow-lg hover:shadow-purple-700">
      <div className="relative h-52 w-64 rounded-xl">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-xl text-gray-600 mt-3 font-Poppins">{title}</h3>
    </div>
  );
}

export default MediumCard;
