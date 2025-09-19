import { HEIGHT_NAVBAR, WIDTH_SIDEBAR } from "@/utils/constants";
import React from "react";

const SideBar = () => {
  return (
    <section
      className="bg-bluegray-800  px-2 pt-4 flex flex-column align-items-center fixed"
      style={{
        width: `${WIDTH_SIDEBAR}px`,
        minHeight: `calc(100vh - ${HEIGHT_NAVBAR}px)`,
        marginTop: `${HEIGHT_NAVBAR}px`,
      }}
    >
      <i className="pi pi-box text-white"></i>
    </section>
  );
};

export default SideBar;
