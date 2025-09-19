import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { HEIGHT_NAVBAR, WIDTH_SIDEBAR } from "@/utils/constants";
import { ToastProvider } from "@/context/ToastProvider";
import CustomDialog from "@/components/common/CustomDialog";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <section>
      <Navbar />
      <section className="flex">
        <ToastProvider>
          <SideBar />
         <CustomDialog/>
         
          <div
            className="py-3 px-5 w-full "
            style={{
              marginLeft: `${WIDTH_SIDEBAR}px`,
              marginTop: `${HEIGHT_NAVBAR}px`,
            }}
          >
            {children}
          </div>
        </ToastProvider>
      </section>
    </section>
  );
};

export default MainLayout;
