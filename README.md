# 📚 Mi Biblioteca

Aplicación web desarrollada con JavaScript Vanilla para gestionar una biblioteca personal. Permite agregar, editar, eliminar y administrar el estado de los libros, además de realizar búsquedas y filtros dinámicos.

---

## 📖 Descripción

Mi Biblioteca es una aplicación orientada a la gestión de una colección de libros. Fue desarrollada utilizando JavaScript moderno (ES6+) y programación orientada a objetos, manipulando el DOM de forma dinámica y almacenando la información mediante **Local Storage** para mantener los datos entre sesiones.

El proyecto fue desarrollado como parte del módulo de JavaScript, aplicando conceptos como:

- Programación Orientada a Objetos.
- Manipulación del DOM.
- Módulos ES6.
- Eventos.
- Local Storage.
- Consumo de datos desde un archivo JSON.
- Bootstrap.
- SweetAlert2.

---

# ✨ Funcionalidades

## Gestión de libros

- ✅ Agregar nuevos libros.
- ✅ Editar la información de un libro.
- ✅ Eliminar libros.
- ✅ Cambio de estado del libro.

### Estados disponibles

- Disponible
- Reservado
- Prestado

Cada estado modifica automáticamente las acciones disponibles para el usuario.

---

## 🔄 Gestión de estados

Dependiendo del estado del libro se muestran distintas acciones:

| Estado | Acciones |
|---------|----------|
| Disponible | Reservar / Prestar |
| Reservado | Liberar reserva |
| Prestado | Devolver |

---

## 🔍 Filtros

La aplicación permite combinar múltiples filtros al mismo tiempo.

### Búsqueda por texto

Busca de forma dinámica mientras el usuario escribe.

Se puede buscar por:

- Título
- Autor

### Filtro por estado

- Todos
- Disponible
- Reservado
- Prestado

### Filtro por género

Los géneros se cargan automáticamente a partir de los libros existentes.

### Limpiar filtros

Permite restablecer todos los filtros con un solo botón.

---

## 📊 Estadísticas

La aplicación muestra información resumida de la biblioteca:

- Total de libros.
- Libros disponibles.
- Libros reservados.
- Libros prestados.

Las estadísticas se actualizan automáticamente cada vez que ocurre un cambio.

---

## 💾 Persistencia

La aplicación utiliza **Local Storage** para guardar la información.

Cuando se ejecuta por primera vez:

1. Se cargan los libros desde un archivo JSON.
2. Se almacenan automáticamente en Local Storage.

En las siguientes ejecuciones:

- Los datos se obtienen directamente desde Local Storage.

---

# 🛠 Tecnologías utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript ES6+
- Local Storage
- SweetAlert2

---

# 📁 Estructura del proyecto

```
assets/
│
├── css/
│   └── style.css
│
├── js/
│   ├── dom/
│   ├── eventos/
│   ├── models/
│   ├── servicios/
│   ├── utils/
│   └── script.js
│
└── db/
    └── libros.json
```

---

# 🧩 Arquitectura

El proyecto se encuentra dividido por responsabilidades:

### Models

Contiene las clases principales.

- Libro
- Biblioteca

---

### DOM

Responsable del renderizado dinámico de la interfaz.

---

### Eventos

Gestiona:

- Eventos del formulario.
- Eventos de la tabla.
- Filtros.
- Botones de acción.

---

### Servicios

Obtención de datos desde el archivo JSON.

---

### Utils

Funciones auxiliares utilizadas por la aplicación.

---

# 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio.

```bash
git clone https://github.com/usuario/mi-biblioteca.git
```

2. Abrir el proyecto con Visual Studio Code.

3. Ejecutar utilizando **Live Server**.

---

# 📸 Capturas

*(Agregar aquí imágenes de la aplicación.)*

---

# 👨‍💻 Autor

Desarrollado por **Diego**.

Proyecto realizado como práctica del módulo de JavaScript, aplicando conceptos de programación orientada a objetos, manipulación del DOM, eventos, persistencia de datos y consumo de información desde archivos JSON.