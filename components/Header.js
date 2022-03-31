import { SearchIcon, UserCircleIcon } from "@heroicons/react/solid";

function Header() {
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
        <ul className="flex items-center space-x-8 font-Poppins font-bold text-gray-600">
          <li className="cursor-pointer hover:bg-blue-500 px-2 py-1 rounded-lg hover:text-white hover:shadow-md hover:shadow-gray-700 transform transition duration-200">
            Explore
          </li>
          <li className="cursor-pointer hover:bg-blue-500 px-2 py-1 rounded-lg hover:text-white hover:shadow-md hover:shadow-gray-700 transform transition duration-200">
            Resources
          </li>
          <li className="cursor-pointer hover:bg-blue-500 px-2 py-1 rounded-lg hover:text-white hover:shadow-md hover:shadow-gray-900 transform transition duration-200">
            Create
          </li>
          <li className="cursor-pointer">
            <UserCircleIcon className="h-8" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
