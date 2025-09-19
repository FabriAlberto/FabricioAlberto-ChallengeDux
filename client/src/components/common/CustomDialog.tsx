import { ConfirmDialog } from "primereact/confirmdialog";
import React from "react";

const CustomDialog = () => {
  return (
    <ConfirmDialog
      acceptClassName="p-button-primary"
      rejectClassName="p-button-primary   p-button-outlined"
    />
  );
};

export default CustomDialog;
