import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El correo electrónico es obligatorio",
    })
    .email({
      message:
        "Por favor, introduce una dirección de correo electrónico válida",
    }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "El nombre de usuario es obligatorio",
      })
      .min(3, {
        message: "El nombre de usuario debe tener al menos 3 caracteres",
      }),
    email: z.string().email({
      message:
        "Por favor, introduce una dirección de correo electrónico válida",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
