# 🌟 Aplicación CRUD con MERN Stack y JWT

Este proyecto es una aplicación web basada en el stack **MERN** (MongoDB, Express, React y Node.js), con autenticación mediante **JSON Web Tokens (JWT)**.

## 🚀 Características

- **Frontend:** React con Vite para una experiencia rápida y moderna.
- **Backend:** Node.js con Express y autenticación basada en JWT.
- **Base de datos:** MongoDB.
- **Contenedores:** Soporte para Docker y Docker Compose.
- **Autenticación segura:** Manejo de usuarios con JWT.

---

## 📦 Instalación y Ejecución

### 🔹 Opción 1: Usando Docker Compose (Recomendado)

1. Clona el repositorio:

   ```sh
   git clone https://github.com/devsantiagox/TaskFlow
   cd mern-tasks-auth
   ```

2. Levanta los contenedores con Docker Compose:

   ```sh
   docker-compose up -d
   ```

3. Inicia la aplicación en modo desarrollo:

   ```sh
   npm run dev
   ```

La aplicación estará disponible en [http://localhost:4000](http://localhost:4000).

---

### 🔹 Opción 2: Instalación Manual

1. Clona el repositorio:

   ```sh
   git clone https://github.com/devsantiagox/TaskFlow
   cd mern-tasks-auth
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Configura las variables de entorno creando un archivo **.env** basado en **.env.example**.

4. Asegúrate de tener una instancia de **MongoDB** en ejecución.

5. Construye la aplicación:

   ```sh
   npm run build
   ```

6. Inicia la aplicación en producción:

   ```sh
   npm start
   ```

La aplicación se ejecutará en [http://localhost:3000](http://localhost:3000).

---

## 🌐 Configuración

El archivo **.env** debe contener las siguientes variables:

```env
FRONTEND_URL=http://localhost:5173
MONGO_URI=mongodb://localhost:27017/tu_base_de_datos
JWT_SECRET=tu_secreto_seguro
PORT=4000
```

> **Nota:** Asegúrate de reemplazar los valores según tu entorno.

---

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**. ¡Siéntete libre de contribuir y mejorar! 🚀

