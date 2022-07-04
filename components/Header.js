import { GlobeAltIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { selectItems } from '../slices/basketSlice';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import SearchBar from './SearchBar';
import Image from 'next/image';

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  const items = useSelector(selectItems);

  const [searchInput, setSearchInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 shadow-lg  shadow-gray-700 text-black bg-white text-sm">
      <div className="flex items-center justify-between py-2 my-auto">
        {/* Header Left */}
        <div className="">
          <Link href="/">
            <a className="flex items-center">
              {/* Logo */}
              {/* <Image
                src={logo}
                objectFit="contain"
                height={54}
                width={54}
                className=""
              /> */}
              {/* Title */}
              <p className="font-Poppins text-blue-800 text-lg cursor-pointer">3Dhousemap</p>
            </a>
          </Link>
        </div>

        {/* Header Center */}
        {/* <div className="">
          <div
            className="relative flex items-center text-center border-[1px] border-gray-400 rounded-lg px-2 py-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <SearchIcon className="h-5 text-gray-600" />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Search maps, collections and ideas"
              className="outline-none bg-transparent text-gray-500 font-Poppins  placeholder:text-md ml-2 w-[400px]"
            />
          </div>
        </div> */}
        <SearchBar />

        {/* Header Right */}
        <div>
          <div className="flex items-center space-x-6 font-Poppins text-gray-700">
            <div className="cursor-pointer hover:bg-blue-600 p-2 rounded-lg hover:text-white hover:shadow-md hover:shadow-gray-600 transform transition duration-200">
              <Link href="/joinus">
                <a className="flex">
                  <p>Join us</p>
                  <GlobeAltIcon className="h-5 ml-2" />
                </a>
              </Link>
            </div>
            {session ? (
              <div className="cursor-pointer flex items-center">
                <div className="flex items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-10 px-4 py-1 text-sm font-medium text-white hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-">
                        <Image
                          alt="avatar"
                          src={session.user.image || 'https://via.placeholder.com/150'}
                          className="rounded-full h-8 w-8"
                        />
                        <ChevronDownIcon
                          className="ml-2 -mr-1 h-5 w-5 text-blue-300 hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="flex absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="flex flex-col items-center px-1 py-1 ">
                          <Menu.Item>
                            <Link href="/user">
                              <a>
                                <button className="hover:bg-gray-300 py-2 w-52 px-1 rounded-md hover:text-blue-600">
                                  Dashboard
                                </button>
                              </a>
                            </Link>
                          </Menu.Item>

                          <Menu.Item>
                            <button
                              className="hover:bg-gray-300 py-2 w-52 px-1 rounded-md hover:text-blue-600"
                              onClick={signOut}>
                              Signout
                            </button>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div className="flex flex-col">
                    <p className="text-xs ml-3">Hello</p>
                    <p className="text-xs ml-3">{session ? ` ${session.user.name}` : 'Sign in'}</p>
                  </div>
                </div>

                {/* <div className="ml-4">
                  <button
                    className=" text-blue-700 font-Poppins hover:shadow-md hover:shadow-gray-700 p-2 rounded-lg hover:text-white hover:bg-blue-600 border-gray-700"
                    onClick={signOut}
                  >
                    Sign out
                  </button>
                </div> */}
              </div>
            ) : (
              <button
                className="text-sm text-blue-600 font-Poppins font-bold hover:shadow-md hover:shadow-gray-700 px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 border-[1px] border-gray-700"
                onClick={signIn}>
                Signin
              </button>
            )}

            <div className="relative mx-3">
              <Link href="/checkout">
                <a className="flex items-center">
                  <span className="absolute -top-2 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-semibold text-sm">
                    {items.length}
                  </span>
                  <ShoppingCartIcon className="h-7" />
                  <p className="text-sm ml-1 ">Basket</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
