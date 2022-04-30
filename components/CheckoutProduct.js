import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  category,
  image,
  description,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      category,
      image,
      description,
    };

    // Push item into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 flex-col cursor-pointer bg-white z-30 m-5 p-10 font-Poppins shadow-md shadow-white rounded-lg text-black">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5 py-4 flex flex-col">
        <p className="">{title}</p>
        <div className="flex mt-4">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-400" />
            ))}
        </div>
        <p>{description}</p>
        <div className="mt-auto">
          <p>₹{price}</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="btn mt-auto" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button
          className="btn mt-auto whitespace-nowrap"
          onClick={removeItemFromBasket}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
