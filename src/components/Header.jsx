// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30" >
      <div className=" mx-2 my-2 backdrop-blur-0 bg-gradient-to-r from-pink-100 via-yellow-100 to-orange-100   flex justify-between rounded-2xl">
        <a href="https://www.facebook.com/groups/686643550128589">
          <h1 className="text-xl font-bold  py-2 text-left px-4 my-2  decoration-sky-400 underline bg-clip-text text-transparent  bg-gradient-to-r from-sky-300 to-orange-500">KeytHandMade</h1>
        </a>
        <div className="flex justify-end my-2">
          <a href="" className="py-4 px-4 bg-pink-200 hover:bg-pink-300 text-white rounded-xl transition duration-300">
            <FaPhoneFlip />
          </a>
          <a href="" className="py-4 px-4 mx-2 bg-yellow-200 hover:bg-yellow-300 text-white rounded-xl transition duration-300">
            <FaMapMarkedAlt />
          </a>
        </div>
      </div>
      {/* Можно добавить навигацию или логотип */}
    </header>
  );
}

export default Header;
