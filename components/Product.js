import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      image,
    };

    // Sending the product to redux store
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col cursor-pointer bg-white z-30 m-5 p-10 font-Poppins shadow-lg shadow-gray-600 rounded-lg">
      <p className="absolute top-2 right-2 text-xs text-gray-400">{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-2 text-sm md:line-clamp-2">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      {/* <p className="text-xs my-1 lg:line-clamp-2">{description}</p> */}

      <div className="mb-3">
        <p>₹{price}</p>
      </div>

      <button className="mt-auto btn" onClick={addItemToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
