import {
  GlobeAltIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { selectItems } from "../slices/basketSlice";
import whatsapp from "../icons/whatsapp.png";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/solid";
import instagram from "../icons/instagram.png";
import twitter from "../icons/twitter.png";
import linkedin from "../icons/linkedin.png";
import Youtube from "../icons/youtube.png";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  const items = useSelector(selectItems);

  const [searchInput, setSearchInput] = useState("");
  return (
    <header className="sticky top-0 z-50 px-4 py-2 shadow-lg  shadow-gray-600 text-white bg-[#1E1E1E]">
      <div className="flex items-center justify-between my-auto py-3">
        {/* Header Left */}
        <div className="">
          {/* Logo */}

          {/* Title */}
          <p className="font-Dosis font-bold text-2xl cursor-pointer text-blue-800">
            <Link href="/">
              <a>3D House Map</a>
            </Link>
          </p>
        </div>

        {/* Header Center */}
        <div className="">
          <div className="flex items-center text-center border-[1px] border-gray-400 rounded-lg px-2 py-1">
            <SearchIcon className="h-5 text-gray-600" />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Search maps, collections and ideas"
              className="outline-none bg-transparent text-gray-300 font-Poppins  placeholder:text-md ml-2 w-[400px]"
            />
          </div>
        </div>

        {/* Header Right */}
        <div>
          <div className="flex items-center space-x-6 font-Poppins text-gray-300">
            <div className="cursor-pointer hover:bg-blue-700 px-2 py-1 rounded-lg hover:text-white hover:shadow-md hover:shadow-gray-600 transform transition duration-200">
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
                    className=" text-blue-700 font-Poppins hover:shadow-md hover:shadow-gray-700 px-3 py-1 rounded-lg hover:text-white hover:bg-blue-600 border-gray-700"
                    onClick={signOut}
                  >
                    Sign out
                  </button>
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

            <div className="relative mx-3">
              <Link href="/checkout">
                <a className="flex items-center">
                  <span className="absolute -top-2 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-semibold text-sm">
                    {items.length}
                  </span>
                  <ShoppingCartIcon className="h-7 text-white" />
                  <p className="text-sm ml-1 text-white">Basket</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {searchInput && (
        <div className="grid grid-cols-2 font-Poppins text-xs py-4 max-w-4xl mx-auto">
          <section className="flex flex-col items-center space-y-3 py-3 shadow-md shadow-gray-400 rounded-xl mx-3">
            <h3 className="text-2xl">Quick Search</h3>
            <div className="flex flex-col items-center space-y-1">
              <div className="flex space-x-4 items-center">
                <form
                  className="flex space-x-4 items-center"
                  type="submit"
                  action="POST"
                >
                  <input
                    type="Number"
                    placeholder="Min plot area(sqft)"
                    className="input"
                  />
                  <input
                    type="Number"
                    placeholder="Max plor area(sqft)"
                    className="input"
                  />
                </form>
              </div>
              <h3>OR</h3>
              <div>
                <form
                  className="flex space-x-4 items-center"
                  type="submit"
                  action="POST"
                >
                  <input
                    type="Number"
                    placeholder="Width(ft)"
                    className="input"
                  />
                  <input
                    type="Number"
                    placeholder="Length(ft)"
                    className="input"
                  />
                </form>
              </div>
              <h3>Directions</h3>
              <div className="text-black">
                <select
                  name="directions"
                  id=""
                  className="w-[300px] input text-gray-300 bg-[#1E1E1E]"
                >
                  <option value="">North</option>
                  <option value="">South</option>
                  <option value="">East</option>
                  <option value="">West</option>
                  <option value="">North East</option>
                  <option value="">South East</option>
                  <option value="">North West</option>
                  <option value="">South West</option>
                </select>
              </div>
              <div>
                <input type="Number" placeholder="Floors" className="input" />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="button">Search</button>
              <button className="button">Cancel</button>
            </div>
          </section>

          <section className="flex flex-col py-7 space-y-5 items-center shadow-md h-full rounded-xl shadow-gray-300">
            <h3 className="text-xl">Book your order for customized plan</h3>
            <div className="flex space-x-6 items-center">
              <button className=" text-blue-600 px-1 py-0.7 rounded-lg hover:bg-green-600 hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                <Image src={whatsapp} height={40} width={40} />
              </button>
              <button className=" text-blue-600 px-2 py-1 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                <PhoneIcon className="h-8" />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-xl mt-8">Connect with us</h3>
              <div className="flex space-x-5 mt-4">
                <div className="">
                  <button className=" text-blue-600 px-2 py-1 rounded-lg hover:bg-[#fb3958] hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                    <Image src={instagram} height={25} width={25} />
                  </button>
                </div>
                <div className="">
                  <button className=" text-blue-600 px-2 py-1 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                    <Image src={twitter} height={25} width={25} />
                  </button>
                </div>
                <div className="">
                  <button className=" text-blue-600 px-2 py-1 rounded-lg hover:bg-[#FF0000] hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                    <Image
                      src={Youtube}
                      height={25}
                      width={25}
                      className="text-white"
                    />
                  </button>
                </div>
                <div className="">
                  <button className=" text-blue-600 px-2 py-1 rounded-lg hover:bg-[#0072b1] hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                    <Image src={linkedin} height={25} width={25} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </header>
  );
}

export default Header;
