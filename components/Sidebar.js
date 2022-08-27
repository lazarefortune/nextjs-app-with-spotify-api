import React from "react";
import Image from "next/image";
import { IoCompass, IoHome, IoAddOutline, IoHeart } from "react-icons/io5";

function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex-col items-center p-4 bg-black w-[90px] h-screen space-y-8">
      <Image
        src="https://zupimages.net/up/22/33/khud.jpeg"
        width={90}
        height={95}
        objectFit="contain"
        className="animate-pulse"
        alt="Listen"
      />

      <div className="flex flex-col space-y-8">
          <a href="/" className="flex items-center space-x-3">
              <IoHome className="text-4xl text-white siderbarIcon cursor-pointer" />
          </a>
          <a href="/my" className="flex items-center space-x-3">
              <IoHeart className="text-4xl text-white siderbarIcon cursor-pointer" />
          </a>
          <IoAddOutline className="text-4xl text-white siderbarIcon cursor-pointer" />
      </div>
    </section>
  );
}

export default Sidebar;
