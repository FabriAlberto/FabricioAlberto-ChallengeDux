"use client";

import { createContext, useContext } from "react";
import type { ToastMessage } from "primereact/toast";

type ToastContextType = {
  showToast: (message: ToastMessage | ToastMessage[]) => void;
};

export const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export function useToast() {
  return useContext(ToastContext);
}