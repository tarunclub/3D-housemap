import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="flex flex-col cursor-pointer items-center hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-52 w-64 rounded-xl">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-3 text-white font-Poppins">{title}</h3>
    </div>
  );
}

export default MediumCard;
