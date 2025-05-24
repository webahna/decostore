# 🌿 Proyecto de Instalación de Productos Decorativos y Funcionales

El objetivo es ofrecer una presentación clara y profesional de servicios de instalación como césped residencial, césped deportivo, lambrín, persianas, muros verdes y pisos laminados.

## 🚀 Tecnologías utilizadas

- **Astro**: Framework moderno para generación de sitios rápidos y optimizados.
- **React**: Biblioteca de componentes para interfaces interactivas.
- **Tailwind CSS**: Framework de estilos basado en utilidades.
- **clsx**: Utilidad para manejo de clases condicionales.
- **FontAwesome**: Biblioteca de iconos vectoriales para interfaces.
- **Zustand**: Librería ligera y escalable para el manejo de estados en React.

## 📁 Estructura del proyecto

src/
├── components/ # Componentes reutilizables (UI, cards, iconos, etc.)
├── layouts/ # Layouts base para cada tipo de página
├── pages/
│ ├── index.astro # Página principal (Home)
│ ├── cesped-residencial.astro
│ ├── cesped-deportivo.astro
│ ├── lambrin.astro
│ ├── persianas.astro
│ ├── muros-verdes.astro
│ └── pisos-laminados.astro
├── store/ # Estados globales manejados con Zustand
├── styles/ # Estilos personalizados (si aplica)
└── utils/ # Funciones utilitarias (opcional)

## 🌐 Páginas del sitio

Cada página describe los beneficios y características de la instalación de cada producto:

- `/cesped-residencial`
- `/cesped-deportivo`
- `/lambrin`
- `/persianas`
- `/muros-verdes`
- `/pisos-laminados`
- `/` (Inicio general con resumen de servicios)

## ⚙️ Instalación y desarrollo

```bash
npm install
npm run dev
```

## 🚀 Deploy

Puedes ver el sitio en vivo aquí:  
👉 [https://decostoreinstalaciones.com](https://decostoreinstalaciones.com)
