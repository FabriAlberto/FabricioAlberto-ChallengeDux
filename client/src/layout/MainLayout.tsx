import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
type Props = {
  children: ReactNode;
};
const MainLayout: FC<Props> = ({ children }) => {
  return (
    <section>
      <Navbar />
      <section className="flex">
        <SideBar />
        <div className="py-3 px-5">{children}</div>
      </section>
    </section>
  );
};

export default MainLayout;
