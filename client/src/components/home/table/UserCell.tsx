"use client";
import React, { useState } from "react";
import { User } from "@/types/personal";
import CreateUserFormDialog from "../create-user/CreateUserFormDialog";

type Props = {
  user: User;
};

const UserCell: React.FC<Props> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };


  return (
    <>

      <p
        style={{
          color: "#0763E7",
        }}
        className="capitalize p-0 m-0 font-bold cursor-pointer underline"
        onClick={handleClick}
      >
        {user.usuario.toLocaleLowerCase()}
      </p>

      <CreateUserFormDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        formState={user}
        isEdit
      />
    </>
  );
};

export default UserCell;
