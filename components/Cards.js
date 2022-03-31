import Image from "next/image";

function Cards({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out rounded-lg shadow-md shadow-gray-600">
      <div className="relative h-80 w-80 rounded-lg">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h3 className="text-xl my-2 mx-1 font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default Cards;
