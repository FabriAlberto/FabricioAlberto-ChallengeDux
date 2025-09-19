"use client";
import { Button } from "primereact/button";
import React, { useState } from "react";
import { Status, FormUser } from "@/types/personal";
import { config } from "@/config";
import CreateUserFormDialog from "./CreateUserFormDialog";

const CreateUserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Estado que persiste los datos del form
  const [formState, setFormState] = useState<FormUser>({
    id: "",
    sector: config.sector,
    usuario: "",
    estado: "" as Status | "",
  });

  const isModified =
    (formState.id || formState.usuario || formState.estado) && !isOpen;

  return (
    <>
      <Button
        label={isModified ? "Seguir creando usuario" : "Nuevo usuario"}
        icon={!isModified && "pi pi-plus"}
        onClick={() => setIsOpen(true)}
        className="p-button-primary"
      >
        {isModified && <i className="pi pi-chevron-right" />}
      </Button>
      <CreateUserFormDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        formState={formState}
        setFormState={setFormState}
      />
    </>
  );
};

export default CreateUserButton;
