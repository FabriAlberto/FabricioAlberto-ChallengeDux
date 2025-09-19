import { Status } from "@/types/personal";
import * as yup from "yup";

export const newUserSchema = () =>
  yup.object({
    id: yup.string().required("El ID es obligatorio"),
    usuario: yup.string().required("El nombre es obligatorio"),
    sector: yup.number().required("El sector es obligatorio"),
    estado: yup
      .mixed<Status |string>()
      .transform((value) => (value === "" ? undefined : value))
      .oneOf([Status.ACTIVE, Status.INACTIVE], "Estado inválido")
      .required("El estado es obligatorio"),
  });

