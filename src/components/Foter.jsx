import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaVk } from "react-icons/fa";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <div className="mx-2 my-2 backdrop-blur-0 bg-gradient-to-r from-pink-100 via-yellow-100 to-orange-100 flex justify-center rounded-2xl">
        <div className="flex justify-center  my-2">
          <a href="https://www.facebook.com/groups/686643550128589" className="py-4 px-4 bg-pink-200 hover:bg-pink-300 text-white rounded-xl transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/" className="py-4 px-4 mx-2 bg-yellow-200 hover:bg-yellow-300 text-white rounded-xl transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/" className="py-4 px-4 mx-2 bg-orange-200 hover:bg-orange-300 text-white rounded-xl transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://vk.com/" className="py-4 px-4 mx-2 bg-pink-200 hover:bg-pink-300 text-white rounded-xl transition duration-300">
            <FaVk />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;