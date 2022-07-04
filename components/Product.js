import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ key, id, title, price, category, image, description }) {
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING));

  const router = useRouter();
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      key,
      id,
      title,
      price,
      category,
      description,
      image
    };

    // Sending the product to redux store
    dispatch(addToBasket(product));
  };
  const { data: session } = useSession();

  return (
    <div className="relative flex flex-col cursor-pointer bg-white z-30 m-5 py-5 pt-4 px-3 font-Poppins shadow-lg shadow-gray-400 rounded-lg">
      <div>
        {session ? (
          <div className="relative flex flex-col cursor-pointer items-center">
            <div className="absolute left-1 text-xs text-gray-400">
              <Link href="/user">
                <a className="">
                  <p className="text-semibold">{session.user.name}</p>
                </a>
              </Link>
            </div>
            <Link href="/user">
              <a className="flex items-center mx-auto">
                <Image
                  alt="avatar"
                  src={session?.user?.image || 'https://via.placeholder.com/150'}
                  className="rounded-full h-9 w-9 object-contain"
                />
              </a>
            </Link>
          </div>
        ) : null}
        <p className="absolute top-4 right-2 text-xs text-gray-400">{category}</p>

        <Image
          alt="soome-img"
          src={image}
          className="object-cover w-full h-[200px] my-4 rounded-lg"
        />

        <h4 className="my-2 text-sm md:line-clamp-2">{title}</h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-1 lg:line-clamp-2 text-gray-500">{description}</p>

        <div className="mb-3">
          <p className="font-semibold">₹{price}</p>
        </div>
      </div>

      <button className="mt-auto btn" onClick={addItemToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
