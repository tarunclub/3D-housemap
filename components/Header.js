import { SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useSession, signOut, signIn } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between my-2 px-4 shadow-md pb-3.5 pt-1 ">
      {/* Header Left */}
      <div className="flex">
        {/* Logo */}

        {/* Title */}
        <p className="font-Dosis text-3xl cursor-pointer text-blue-800">
          Ghar Naksha
        </p>
      </div>

      {/* Header Center */}
      <div className="">
        <div className="flex items-center text-center border-[1px] border-gray-400 rounded-lg px-2 py-1">
          <SearchIcon className="h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search maps, collections and ideas"
            className="outline-none text-gray-700 text-light font-Poppins placeholder:text-md ml-2 w-[400px]"
          />
        </div>
      </div>

      {/* Header Right */}
      <div>
        <div className="flex items-center space-x-8 font-Poppins font-bold text-gray-600">
          <div className="cursor-pointer hover:bg-blue-500 px-2 py-1 rounded-lg hover:text-white hover:shadow-md hover:shadow-gray-700 transform transition duration-200">
            Explore
          </div>
          <div className="cursor-pointer hover:bg-blue-500 px-2 py-1 rounded-lg hover:text-white hover:shadow-md hover:shadow-gray-700 transform transition duration-200">
            Resources
          </div>
          <div className="cursor-pointer hover:bg-blue-500 px-2 py-1 rounded-lg hover:text-white hover:shadow-md hover:shadow-gray-900 transform transition duration-200">
            Create
          </div>
          {session ? (
            <div className="cursor-pointer flex items-center">
              <img src={session.user.image} className="rounded-full h-9 w-9" />

              <div className="ml-4">
                <button
                  className="text-sm text-blue-600 font-Poppins font-bold hover:shadow-md hover:shadow-gray-700 px-3 py-2 rounded-lg hover:text-white hover:bg-blue-600 border-[1px] border-gray-700"
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
        </div>
      </div>
    </header>
  );
}

export default Header;
