"use server";

import { apiDux } from "@/service/api.service";
import { User } from "@/types/personal";
import { revalidatePath, revalidateTag } from "next/cache";

export async function deleteUserAction(userId: string) {
  try {
    await apiDux.deletePersonal(userId);
    revalidatePersonalPaths();
    return { success: true, message: "Usuario eliminado correctamente" };
  } catch (err) {
    console.error("Error eliminando usuario:", err);
    throw new Error("No se pudo eliminar el usuario");
  }
}

export async function createUserAction(user: User) {
  try {
    await apiDux.createPersonal(user);
    revalidatePersonalPaths();
    return { success: true, message: "Usuario creado correctamente" };
  } catch (err) {
    console.error("Error creando usuario:", err);
    throw new Error(
      "Error al crear el usuario, intentelo nuevamente más tarde."
    );
  }
}

export async function updateUserAction(userId: string, user: User) {
  try {
    await apiDux.updateUserById(userId,user);
    revalidatePersonalPaths();
    return { success: true, message: "Usuario actualizado correctamente" };
  } catch (err) {
    console.error("Error creando usuario:", err);
    throw new Error(
      "Error al editar el usuario, intentelo nuevamente más tarde."
    );
  }
}
const revalidatePersonalPaths = () => {
  revalidatePath("/"); // -> para revalidar el path general y que carguen los users de nuevo
  revalidateTag("personalTotal"); // -> para revalidar el total de personal para que se actualice el paginador si es necesario
};
