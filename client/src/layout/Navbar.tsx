import React from "react";
import Image from "next/image";
import { HEIGHT_NAVBAR } from "@/utils/constants";
const Navbar = () => {
  return (
    <div
      className="w-full px-3 flex justify-content-between align-items-center bg-blue-500 fixed z-1"
      style={{ height: `${HEIGHT_NAVBAR}px` }}
    >
      <Image
        src={"/logo-dux-blanco.png"}
        alt="dux icon"
        width={25}
        height={25}
      />
      <p className="pi pi-cog text-white	" />
    </div>
  );
};

export default Navbar;
