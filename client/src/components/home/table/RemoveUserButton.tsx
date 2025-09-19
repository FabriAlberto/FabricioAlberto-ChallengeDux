import React, { FC} from "react";
import { confirmDialog } from "primereact/confirmdialog";
import { deleteUserAction } from "@/app/actions";
import { User } from "@/types/personal";
import { useToast } from "@/context/ToastContext";
type Props = {
  user: User;
};
const RemoveUserButton: FC<Props> = ({ user }) => {
  const { showToast } = useToast();
  const accept = async () => {
    try {
      await deleteUserAction(user.id);
      showToast({
        severity: "success",
        summary: "Eliminado",
        detail: `Usuario "${user.usuario}" eliminado con éxito.`,
        life: 3000,
      });
    } catch (error) {
      console.log(error);
      showToast({
        severity: "error",
        summary: "Error",
        detail: `Ocurrio un error al intentar eliminar el usuario, por favor intente nuevamente más tarde.`,
        life: 3000,
      });
    }
  };

  const openConfirm = () => {
    confirmDialog({
      message: `Estas seguro de eliminar el usuario "${user.usuario}"?`,
      header: "Eliminar usuario",
      icon: "pi pi-exclamation-triangle",
      defaultFocus: "accept",
      acceptLabel: "Eliminar",
      rejectLabel: "Cancelar",
      accept,
    });
  };
  return (
    <>
      <div className="">
        <i
          className="pi pi-trash cursor-pointer text-red-500"
          title="Eliminar usuario"
          onClick={openConfirm}
        />
      </div>
    </>
  );
};

export default RemoveUserButton;
