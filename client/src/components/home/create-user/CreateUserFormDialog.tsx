import { Dialog } from "primereact/dialog";
import React, { FC } from "react";
import CreateUserForm from "./CreateUserForm";
import { FormUser } from "@/types/personal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  formState: FormUser;
  setFormState?: React.Dispatch<React.SetStateAction<FormUser>>;
  isEdit?:boolean;
};

const CreateUserFormDialog: FC<Props> = ({
  isOpen,
  onClose,
  formState,
  setFormState,
  isEdit
}) => {
  return (
    <Dialog
      visible={isOpen}
      style={{ padding: 0 }}
      className="w-11 md:w-6 xl:w-5"
      headerClassName="py-2 new-user-dialog text-white font-bold bg-primary"
      onHide={onClose}
      closeIcon={"pi pi-minus"}
      header={isEdit?"Editar usuario":"Usuario"}
      draggable={false}
      resizable={false}
    >
      <CreateUserForm
        defaultValues={formState}
        onCancel={onClose}
        setFormState={setFormState}
        isEdit={isEdit}
      />
    </Dialog>
  );
};

export default CreateUserFormDialog;
