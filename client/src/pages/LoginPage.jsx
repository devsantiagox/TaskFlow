import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {loginErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-2xl font-bold">Inicio de Sesión</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Correo Electrónico:</Label>
          <Input
            label="Escribe tu correo electrónico"
            type="email"
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email", {
              required_error: "El correo electrónico es obligatorio",
              required: true,
            })}
          />
          <p className="text-red-500 text-xs italic">{errors.email?.message}</p>

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Escribe tu contraseña"
            {...register("password", {
              required_error: "La contraseña es obligatoria",
              required: true,
              minLength: 6,
            })}
          />
          <p className="text-red-500 text-xs italic">{errors.password?.message}</p>

          <Button>Ingresar</Button>
        </form>

        <p className="flex gap-x-2 justify-between">
          ¿No tienes una cuenta? <Link to="/register" className="text-sky-500">Registrarse</Link>
        </p>
      </Card>
    </div >
  );
}