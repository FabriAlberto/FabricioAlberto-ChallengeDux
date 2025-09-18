"use client";
import React from "react";
import { User } from "@/types/personal";

type Props = {
  user: User;
  onUserClick?: (user: User) => void;
};

const UserCell: React.FC<Props> = ({ user, onUserClick }) => {
  const handleClick = () => {
    if (onUserClick) {
      onUserClick(user);
    } else {
      console.log("Usuario clickeado:", user);
    }
  };

  return (
    <p
      style={{
        color: "blue",
        cursor: "pointer",
        textDecoration: "underline",
      }}
      className="capitalize p-0 m-0"
      onClick={handleClick}
    >
      {user.usuario.toLocaleLowerCase()}
    </p>
  );
};

export default UserCell;
