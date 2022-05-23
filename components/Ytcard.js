function MediumCard({ link, title }) {
  return (
    <div className="flex flex-col cursor-pointer items-center hover:scale-105 transform transition duration-300 ease-out shadow-sm shadow-gray-500 px-2 py-1 rounded-lg hover:shadow-lg hover:shadow-purple-700">
      <div className="relative h-60 w-80 rounded-xl">
        <iframe
          width="320"
          height="250"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
      <h3 className=" text-gray-500 text-lg mt-3 font-Poppins">{title}</h3>
    </div>
  );
}

export default MediumCard;
