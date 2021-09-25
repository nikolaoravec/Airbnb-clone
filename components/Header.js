import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 p-5 grid grid-cols-3 bg-white shadow-md  md:px-10">
      {/* Left side */}
      <div className="relative flex items-center h-10 my-auto">
        <Image
          className="cursor-pointer"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle - Search */}
      <div className="flex rounded-full items-center md:border-2 py-2 md:shadow-sm">
        <input
          className="bg-transparent pl-5 outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your Search"
        />
        <SearchIcon className=" hidden md:inline-flex cursor-pointer h-8 bg-red-400 text-white rounded-full p-2 md:mx-2 " />
      </div>
      {/* Right side */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
