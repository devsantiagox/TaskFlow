import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-red-500 flex justify-center items-center">
      <header className="bg-zinc-800 p-10">
        <h1 className="text-5xl py-2 font-bold">MERN Proyecto Auth ⚛️</h1>
        <p className="text-md text-slate-400">
          Este proyecto es una aplicación web desarrollada con Vite + React que implementa
          un CRUD de administrador de tareas con autenticación de rutas. La aplicación incluye
          múltiples páginas utilizando React Router, un formulario de inicio de sesión (Login),
          un formulario de registro (Register), una página privada de Dashboard accesible solo
          si el usuario está autenticado, y manejo del estado con useState. Utiliza Node.js y
          Express para la API, MongoDB para la base de datos, y JSON Web Tokens (JWT) para la
          autenticación, con los tokens almacenados en cookies para mantener la sesión activa ✔️.
        </p>

        <Link
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/register"
        >
          ¡Empezar!
        </Link>
      </header>
    </section>
  );
}

export default HomePage;