"use client";

import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import type { ToastMessage } from "primereact/toast";
import { ToastContext } from "./ToastContext";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toastRef = useRef<Toast>(null);

  const showToast = (message: ToastMessage | ToastMessage[]) => {
    toastRef.current?.show(message);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={toastRef} position="top-right" />
      {children}
    </ToastContext.Provider>
  );
}
