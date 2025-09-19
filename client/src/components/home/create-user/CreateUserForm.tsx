import RHFInput from "@/components/common/RhfInput";
import RHFSelect from "@/components/common/RhfSelect";
import { FormUser, Status, User } from "@/types/personal";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import React, { FC, useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newUserSchema } from "@/schemas/new-user.schema";
import { config } from "@/config";
import { createUserAction, updateUserAction } from "@/app/actions";
import { apiDux } from "../../../service/api.service";
import { useToast } from "../../../context/ToastContext";
import { statusOptions } from "@/utils/home/items";

type Props = {
  defaultValues: FormUser;
  setFormState?: React.Dispatch<React.SetStateAction<FormUser>>;
  onCancel?: () => void;
  isEdit?: boolean;
};

const CreateUserForm: FC<Props> = ({
  defaultValues,
  setFormState,
  onCancel,
  isEdit = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const methods = useForm<FormUser>({
    defaultValues,
    resolver: yupResolver(newUserSchema()),
  });
  const {
    handleSubmit,
    watch,
    setError,
    formState: { isDirty },
  } = methods;

  useEffect(() => {
    //nos suscribimos para cada que en cada cambio seteemos la data en nuestro state local
    if (setFormState) {
      const subscription = watch((value) => {
        setFormState?.({
          id: value.id || "",
          usuario: value.usuario || "",
          sector: value.sector ?? config.sector,
          estado: value.estado || "",
        });
      });
      return () => subscription.unsubscribe();
    }
  }, [watch, setFormState]);

  useEffect(() => {
    //cuando el modal se abre hacemos foco en el primer input
    if (inputRef.current) inputRef.current.focus();
  }, []);

  // Creamos este endpoint para validar que no exista el id en uso
  // para este caso es algo raro, ya que el back se deberia encargar de generar el ID
  // pero para validarlo lo realicé asi, también pensé en obtener el último registro y hacer el id auto incremental
  // el id del último registro +1 pero como tenemos que seguir el diseño específico, lo decidí hacer así.
  const validateExistsId = async (id: string) => {
    try {
      const data = await apiDux.getPersonalById(id);
      if (data) return true;
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  const onSubmit = async (data: FormUser) => {
    setIsLoading(true);
    const existsId = isEdit ? false : await validateExistsId(data.id);
    if (existsId) {
      setError("id", { message: "Id en uso" });
      setIsLoading(false);
      return;
    }

    const user: User = {
      ...data,
      estado: data.estado as Status,
    };

    try {
      const { message } = isEdit
        ? await updateUserAction(defaultValues.id, user)
        : await createUserAction(user);
      showToast({
        severity: "success",
        summary: isEdit ? "Usuario Actualizado" : "Usuario creado",
        detail: message,
      });
      handleClose();
    } catch (error) {
      showToast({
        severity: "error",
        summary: "Error",
        detail: error as string,
      });
    }
    setIsLoading(false);
  };

  const handleClose = () => {
    setFormState?.({
      id: "",
      usuario: "",
      sector: config.sector,
      estado: "",
    });
    onCancel?.();
  };

  return (
    <section className="mt-4">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="row-gap-3 flex flex-column">
            <RHFInput
              name="id"
              label="Id:"
              disabled={isEdit}
              placeholder="Ingrese el id del usuario"
              className="w-full"
              ref={inputRef}
            />
            <RHFInput
              name="usuario"
              label="Nombre:"
              placeholder="Ingrese el nombre del usuario"
              className="w-full"
            />
            <RHFSelect
              name="estado"
              label="Estado:"
              placeholder="Seleccionar el estado"
              className="w-full py-0"
              options={statusOptions}
            />
            <RHFInput
              name="sector"
              label="Sector:"
              disabled
              className="w-full"
            />
          </section>
          <Divider />
          <div className="w-full flex justify-content-center gap-3">
            <Button
              label="Cancelar"
              icon={"pi pi-times"}
              className="p-button-primary p-button-outlined"
              type="button"
              onClick={handleClose}
              disabled={isLoading}
            />
            <Button
              label={
                isLoading
                  ? "Cargando..."
                  : isEdit
                  ? "Guardar cambios"
                  : "Confirmar"
              }
              className="p-button-primary"
              icon={"pi pi-check"}
              type="submit"
              disabled={isLoading || (!isDirty && isEdit)}
            />
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default CreateUserForm;
