# 🎬 MovieStick – Explorador de Películas (TMDB)

Aplicación web desarrollada en React que permite explorar películas populares utilizando la API de The Movie Database (TMDB).  
Incluye scroll infinito, navegación dinámica y componentes reutilizables.

---
## 📁 Estructura del proyecto

src/
├── components/
│   └── MovieCard.jsx
├── pages/
│   └── ExploreMovie.jsx
├── App.jsx
├── main.jsx
└── styles/
    └── card-cartelera.css

---
## 🚀 Tecnologías utilizadas
- React + Vite
- React Router DOM
- Fetch API
- CSS modular
- TMDB API v3

---

## 📌 Funcionalidades principales
- Listado de películas populares
- Scroll infinito para cargar más resultados
- Vista individual por película
- Componentes reutilizables (MovieCard)
- Manejo básico de estados y efectos

---
## 🐞 Solución a los errores

### 🔐 Error 401 – Unauthorized
Ocurrió por problemas con la API Key.

**Solución:** corregir la clave y validar que se envía correctamente en la URL.

---

### 💥 Error 500 – Internal Server Error
Apareció por errores de sintaxis en componentes y rutas.

**Solución:** revisar imports, paréntesis y estructura del JSX.

---

### ⚠️ Error 905 – Petición inválida
El error 905 se produjo porque la petición enviaba parámetros incorrectos o valores vacíos.

**Solución:** revisar la petición y limpiar los valores antes de enviarlos.

---

## 📥 Instalación y ejecución

1. **Clonar el repositorio**
```bash
git clone https://github.com/dorisguerra68/moviestick.git

2. **Instalar dependencias (Vite + React + JavaScript)**
```bash
npm install


3. **Iniciar el servidor de desarrollo**
```bash
npm run dev


```bash

