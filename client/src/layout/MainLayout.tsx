import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { HEIGHT_NAVBAR, WIDTH_SIDEBAR } from "@/utils/constants";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <section>
      <Navbar />
      <section className="flex">
        <SideBar />
        <div
          className="py-3 px-5 w-full bg-white"
          style={{ marginLeft: `${WIDTH_SIDEBAR}px`,marginTop:`${HEIGHT_NAVBAR}px`  }}
        >
          {children}  
        </div>
      </section>
    </section>
  );
};

export default MainLayout;
