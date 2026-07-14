# 📚 Biblioteca Digital

Aplicación web para gestionar el catálogo de libros de una biblioteca de forma sencilla.
Permite registrar libros, visualizarlos en un catálogo, buscarlos, filtrarlos por
disponibilidad y consultar estadísticas del acervo en tiempo real.

Proyecto desarrollado como caso de estudio de la asignatura **Desarrollo Web Integral**
para demostrar el uso de **Git** y **GitHub** en un flujo de trabajo colaborativo.

---

## ✨ Funcionalidades

- **Registro de libros** mediante un formulario (título, autor y categoría).
- **Catálogo** en tarjetas que muestran el estado de cada libro (*disponible* / *prestado*).
- **Búsqueda** por título o autor en tiempo real.
- **Filtrado** del catálogo por disponibilidad.
- **Estadísticas** automáticas: total de libros, disponibles y prestados.
- **Diseño responsivo** adaptado a computadoras, tabletas y teléfonos.

---

## 🛠️ Tecnologías

| Capa | Tecnología | Descripción |
|------|------------|-------------|
| Estructura | HTML5 | Marcado semántico de la interfaz |
| Presentación | CSS3 | Estilos, animaciones y diseño responsivo |
| Lógica | JavaScript | Renderizado del catálogo, búsqueda, filtros y estadísticas |

---

## 📁 Estructura del proyecto

```
BiblotecaDemostracion/
├── Index.html          # Estructura de la aplicación
├── css/
│   └── styles.css      # Estilos, paleta de colores y diseño responsivo
├── js/
│   └── script.js       # Lógica del catálogo, búsqueda, filtros y estadísticas
└── README.md           # Este archivo
```

---

## 🚀 Cómo ejecutarlo

No requiere instalación ni dependencias.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JessAckerman/BiblotecaDemostracion.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd BiblotecaDemostracion
   ```
3. Abre el archivo `Index.html` en tu navegador (doble clic) o, en Visual Studio Code,
   usa la extensión **Live Server**.

---

## 🌿 Flujo de trabajo (Git)

El proyecto sigue un modelo de ramas **GitFlow simplificado**:

- **`main`** — versión estable y publicable del proyecto.
- **`develop`** — rama de integración donde convergen las funcionalidades.
- **`feature/*`** — ramas de trabajo individuales; se integran a `develop` mediante *Pull Request*.

Ramas de funcionalidad utilizadas:

- `feature/Joseph-estructura-html` — estructura HTML.
- `feature/Vane-estilos-css` — estilos CSS.

---

## 👥 Equipo

| Integrante | Matrícula | Aporte principal |
|------------|-----------|------------------|
| Vanessa Krystal García Vázquez | 2311081181 | Estilos CSS |
| Joseph Lucero Vázquez | 2311081011 | Estructura HTML |
| Jesús Juárez López | 2321082996 | Configuración del repositorio y lógica JS |

---

## 🎓 Información académica

- **Universidad:** Universidad Tecnológica de Puebla
- **División:** Tecnologías de la Información
- **Carrera:** Ingeniería en Desarrollo y Gestión de Software
- **Asignatura:** Desarrollo Web Integral — Grupo 9.° C
- **Docente:** Pedro Martínez Galaviz

---

<p align="center">Biblioteca Digital &copy; 2026 — Proyecto académico</p>
