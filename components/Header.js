import {
  GlobeAltIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  const items = useSelector(selectItems);
  return (
    <header className="flex items-center sticky top-0 z-50 justify-between p-4 shadow-lg bg-white shadow-gray-600 text-white ">
      {/* Header Left */}
      <div className="flex">
        {/* Logo */}

        {/* Title */}
        <p className="font-Dosis text-2xl cursor-pointer text-blue-800">
          <Link href="/">
            <a>Ghar Naksha</a>
          </Link>
        </p>
      </div>

      {/* Header Center */}
      <div className="">
        <div className="flex items-center text-center border-[1px] border-gray-400 rounded-lg px-2 py-1">
          <SearchIcon className="h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search maps, collections and ideas"
            className="outline-none bg-transparent text-white text-light font-Poppins placeholder:text-md ml-2 w-[400px]"
          />
        </div>
      </div>

      {/* Header Right */}
      <div>
        <div className="flex items-center space-x-6 font-Poppins text-gray-600">
          <div className="cursor-pointer hover:bg-blue-500 px-2 py-1 rounded-lg hover:text-white hover:shadow-md hover:shadow-gray-900 transform transition duration-200">
            <Link href="/">
              <a className="flex">
                <p>Join us</p>
                <GlobeAltIcon className="h-6 ml-2" />
              </a>
            </Link>
          </div>
          {session ? (
            <div className="cursor-pointer flex items-center">
              <Link href="/user">
                <a className="flex items-center">
                  <img
                    src={session.user.image}
                    className="rounded-full h-9 w-9"
                  />
                  <div className="flex flex-col hover:underline">
                    <p className="text-xs ml-3">Hello</p>
                    <p className="hover:underline text-xs ml-3">
                      {session ? ` ${session.user.name}` : "Sign in"}
                    </p>
                  </div>
                </a>
              </Link>

              <div className="ml-4">
                <button
                  className="text-sm text-blue-600 font-Poppins hover:shadow-md hover:shadow-gray-700 px-3 py-2 rounded-lg hover:text-white hover:bg-blue-600 border-gray-700"
                  onClick={signOut}
                >
                  Sign out
                </button>
              </div>
              <div className="relative mx-3">
                <Link href="/checkout">
                  <a className="flex items-center">
                    <span className="absolute -top-2 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-semibold text-sm">
                      {items.length}
                    </span>
                    <ShoppingCartIcon className="h-7" />
                    <p className="text-sm ml-1">Basket</p>
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <button
              className="text-sm text-blue-600 font-Poppins font-bold hover:shadow-md hover:shadow-gray-700 px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 border-[1px] border-gray-700"
              onClick={signIn}
            >
              Signin
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
