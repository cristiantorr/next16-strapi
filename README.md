# 🚀 Proyecto Next.js 16 + Strapi

Este proyecto es una práctica basada en un curso de Midudev, donde estoy
aprendiendo a integrar **Next.js 16** con **Strapi** como CMS Headless.

------------------------------------------------------------------------

## 📚 Tecnologías utilizadas

-   ⚡ Next.js 16
-   🧠 Strapi (Headless CMS)
-   🌐 Fetch API / SSR
-   🎨 Tailwind CSS (opcional)
-   🗄️ Node.js

------------------------------------------------------------------------

## 🎯 Objetivo del proyecto

Aprender a:

-   Consumir APIs desde Next.js
-   Integrar un CMS (Strapi)
-   Manejar renderizado del lado del servidor (SSR)
-   Crear aplicaciones modernas desacopladas (frontend + backend)

------------------------------------------------------------------------

## 📁 Estructura del proyecto

/frontend → Aplicación Next.js\
/backend → API con Strapi

------------------------------------------------------------------------

## ⚙️ Instalación

### 1. Clonar el repositorio

git clone https://github.com/tu-usuario/tu-repo.git\
cd tu-repo

------------------------------------------------------------------------

### 2. Instalar dependencias

#### Frontend

cd frontend\
npm install

#### Backend (Strapi)

cd backend\
npm install

------------------------------------------------------------------------

## 🚀 Ejecutar el proyecto

### Iniciar Strapi

cd backend\
npm run develop

👉 Corre en:\
http://localhost:1337

------------------------------------------------------------------------

### Iniciar Next.js

cd frontend\
npm run dev

👉 Corre en:\
http://localhost:3000

------------------------------------------------------------------------

## 🔗 Variables de entorno

Crear un archivo `.env` en el frontend:

NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

------------------------------------------------------------------------

## 📡 Ejemplo de consumo de API

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getStrapiData(endpoint) { const res = await
fetch(`${BASE_URL}${endpoint}`); return res.json(); }

------------------------------------------------------------------------

## 🧪 Estado del proyecto

🚧 En desarrollo / práctica\
📖 Basado en curso de Midudev\
💡 Enfocado en aprendizaje

------------------------------------------------------------------------

## 🙌 Créditos

Proyecto realizado como práctica del contenido de:

-   Midudev (YouTube / cursos)

------------------------------------------------------------------------

## 📌 Notas

Este proyecto es únicamente con fines educativos y de aprendizaje.

------------------------------------------------------------------------

## ⭐ Próximas mejoras

-   Autenticación\
-   Deploy (Vercel + Strapi Cloud)\
-   Optimización SEO\
-   Manejo de errores avanzado
