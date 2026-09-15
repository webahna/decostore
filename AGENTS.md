# AGENTS.md

Manual operativo para agentes de IA que trabajen en este repositorio. Mantén este archivo enfocado en reglas y contexto duraderos; los detalles temporales de una tarea deben vivir fuera de aquí.

## 1. Project Overview

Decostore es un sitio web público de presentación y captación de clientes para servicios de instalación de acabados residenciales y comerciales. La aplicación publica una página de inicio y páginas dedicadas a pasto sintético residencial y deportivo, lambrín, persianas, muros verdes y pisos laminados.

El sitio es estático: muestra contenido, imágenes, datos de contacto y enlaces externos. El repositorio no contiene backend, base de datos, autenticación, carga de archivos ni procesamiento propio de pagos.

## 2. Tech Stack

- Astro 5 como framework y generador del sitio.
- TypeScript con la configuración estricta de Astro.
- React 19 mediante `@astrojs/react`; permanece en componentes interactivos y componentes heredados.
- Tailwind CSS 4 cargado con `@tailwindcss/vite`.
- Font Awesome para iconos.
- Zustand para el estado del diálogo de bancos en la implementación React heredada.
- `clsx` para clases condicionales en componentes React.
- `@astrojs/sitemap`, con `https://decostoreinstalaciones.com` como URL base.
- npm y `package-lock.json` para dependencias.

No hay herramientas de test, lint o formato configuradas. No hay configuración de despliegue en el repositorio; el README únicamente enlaza el sitio publicado.

## 3. Repository Structure

```text
public/                    -> Imágenes, fuentes, logotipos, iconos de tarjetas y robots.txt.
src/
  components/             -> Componentes compartidos Astro y React.
    pages/                 -> Bloques React heredados de contenido por producto.
    icons/                 -> Iconos locales implementados como componentes.
  hooks/                  -> Hooks React para animación e intersección.
  layouts/                -> Documento HTML común y metadatos de página.
  pages/                  -> Rutas públicas basadas en archivos de Astro.
  store/                  -> Estado global React con Zustand.
  styles/                 -> Entrada global de Tailwind, fuentes y tokens de diseño.
astro.config.mjs          -> Integraciones, URL del sitio y plugin de Tailwind.
tailwind.config.mjs       -> Rutas de contenido y breakpoints del proyecto.
tsconfig.json             -> TypeScript estricto y configuración JSX de React.
```

Añade rutas en `src/pages/`, componentes reutilizables en `src/components/` y recursos servidos sin transformación en `public/`.

## 4. Architecture and Responsibility Rules

- Cada archivo `.astro` en `src/pages/` define una ruta. Mantén allí el contenido y la configuración específicos de esa página.
- `src/layouts/Layout.astro` es el contenedor común para idioma, favicon, título y metadatos description, Open Graph y Twitter.
- `src/components/ProductServicePage.astro` contiene la estructura compartida de las páginas de producto. Las páginas de pasto deportivo, lambrín, persianas, muros verdes y pisos laminados le pasan contenido, iconos, imagen y URL de cotización.
- `src/pages/cesped-residencial.astro` conserva una composición propia porque presenta variantes, beneficios y una galería específicos.
- Prefiere Astro para contenido estático. Usa React y una directiva de hidratación solamente cuando la interacción en el navegador la requiera.
- Mantén el estado propio de un componente cerca del componente. Usa el store de Zustand existente solo para estado que deba compartirse entre islas React relacionadas.
- Coloca los estilos visuales nuevos en clases Tailwind. Los tokens globales, fuentes y cualquier excepción realmente global pertenecen en `src/styles/global.css`.
- Los archivos de `public/` se referencian desde el marcado con rutas absolutas como `/portada-lambrin.webp`.

No introduzcas capas de servicios, modelos o API mientras el sitio siga siendo puramente estático y la tarea no las necesite.

## 5. Coding Conventions

- El proyecto usa módulos ES (`"type": "module"`) e imports relativos con comillas dobles.
- Los componentes usan PascalCase; hooks y stores usan nombres que comienzan con `use`.
- Las páginas y recursos usan nombres descriptivos en kebab-case.
- En frontmatter de Astro, define datos repetidos como arreglos de objetos y renderízalos con `map`.
- Conserva TypeScript para contratos de props en componentes Astro o TSX cuando aporta validación; no debilites `astro/tsconfigs/strict`.
- En `.astro`, usa `class`; en JSX/TSX, usa `className`.
- Mantén semántica y accesibilidad observables: jerarquía de encabezados, `aria-label`, texto alternativo, estados de foco, enlaces de salto y `aria-hidden` en iconos decorativos.
- Para enlaces externos que abren otra pestaña, conserva `target="_blank"` junto con `rel="noreferrer"`.
- No hay formatter configurado. Respeta el estilo del archivo que edites y evita reformatear contenido no relacionado.

## 6. Commands

Ejecuta estos comandos desde la raíz:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run astro -- <comando>
```

- `npm install`: instala las dependencias del proyecto a partir de `package.json` y `package-lock.json`.
- `npm run dev`: inicia el servidor local de Astro.
- `npm run build`: genera el sitio de producción en `dist/`.
- `npm run preview`: sirve localmente el resultado ya construido.
- `npm run astro -- <comando>`: ejecuta un subcomando de la CLI de Astro.

No existen scripts `test`, `lint`, `format` o `check` en `package.json`.

## 7. Validation Before Finishing a Task

1. Revisa `git status` y `git diff` para confirmar que solo cambiaste archivos del alcance solicitado.
2. Busca imports, rutas y referencias antes de mover, renombrar o eliminar archivos.
3. Ejecuta `npm run build` para validar la compilación de Astro y la generación de rutas.
4. Ejecuta `git diff --check` para detectar errores de espacios o marcadores de conflicto.
5. Para cambios visuales, revisa las rutas afectadas en tamaños móvil y escritorio, además de foco por teclado, enlaces y texto alternativo.
6. Informa cualquier comprobación que no hayas podido ejecutar.

No afirmes que pasaron tests o lint: el proyecto no los tiene configurados.

## 8. Environment and Secrets

El código actual no lee variables de entorno y no existe `.env.example`. `.gitignore` excluye `.env` y `.env.production`.

- Nunca confirmes secretos, credenciales ni tokens.
- No imprimas valores sensibles en comandos, logs o respuestas.
- Si una tarea introduce configuración mediante entorno, documenta solo los nombres y valores de ejemplo seguros en un nuevo `.env.example`.
- No modifiques archivos `.env` salvo que la tarea lo requiera expresamente.
- Las URLs de WhatsApp, mapas y redes sociales existentes son contenido público, no secretos.

## 9. Important Project Behavior

- Las rutas públicas actuales son `/`, `/cesped-residencial`, `/cesped-deportivo`, `/lambrin`, `/persianas`, `/muros-verdes` y `/pisos-laminados`.
- La mayoría de las páginas de producto comparten estructura mediante `ProductServicePage.astro`; una modificación allí afecta cinco rutas.
- La página residencial tiene estructura y contenido propios; no asumas que los cambios compartidos se propagan a ella.
- La captación y las consultas sobre pagos salen del sitio mediante enlaces de WhatsApp con mensajes prellenados. No existe checkout ni integración con un procesador de pagos.
- La ubicación abre Google Maps. Las redes sociales también son enlaces externos.
- Las marcas de tarjetas y bancos son contenido informativo renderizado desde recursos de `public/cards/`.
- `Layout.astro` importa una sola vez los estilos globales y genera los metadatos SEO/sociales recibidos por cada página.
- Los colores, fuentes y breakpoints con nombres como `1sm`, `3sm`, `1lg` y `2lg` son tokens propios. Sus valores están declarados en `src/styles/global.css`; revisa también `tailwind.config.mjs` antes de cambiarlos porque ambos archivos contienen breakpoints.
- `dist/` y `.astro/` son salidas generadas y están ignoradas por Git.

## 10. Things Agents Must Not Change Casually

- No cambies el número, mensajes prellenados ni destinos de WhatsApp, la dirección/mapa, perfiles sociales o dominio de producción sin una petición explícita: son puntos de contacto del negocio.
- No cambies la URL `site` de Astro, metadatos, rutas públicas o nombres de recursos sin revisar todos los consumidores.
- No alteres los tokens globales o breakpoints sin comprobar todas las páginas; tienen alcance global y usan nombres no estándar.
- No edites `dist/`, `.astro/` ni `node_modules/`.
- No modifiques `package-lock.json` si no cambian dependencias.
- No realices refactors grandes fuera del alcance solicitado.
- No actualices dependencias sin que la tarea lo requiera.
- No introduzcas una librería nueva si el proyecto ya tiene una solución equivalente.
- No dupliques componentes, hooks, stores o utilidades existentes.
- No elimines código aparentemente muerto sin buscar referencias en todo el repositorio.
- No modifiques archivos no relacionados solamente para mejorarlos.

## 11. Agent Workflow

Antes de modificar código:

1. Lee este archivo y el pedido actual.
2. Revisa `git status` para preservar cambios preexistentes.
3. Identifica rutas, componentes y recursos directamente relacionados.
4. Busca implementaciones similares e inspecciona sus consumidores.
5. Comprende si el cambio pertenece a una página, al componente compartido o al layout global.

Durante la modificación, mantén el alcance pequeño, reutiliza patrones existentes y evita mezclar refactors con el cambio solicitado. Después, revisa el diff, ejecuta las validaciones relevantes y resume qué cambió, cómo se verificó y cualquier limitación.

## 12. Existing Patterns Before New Abstractions

Antes de crear un helper, utility, service, component, middleware, abstraction o módulo, busca una implementación similar en todo `src/`.

Prefiere reutilizar o extender los patrones existentes antes de introducir una segunda forma de resolver el mismo problema. En particular, revisa `ProductServicePage.astro` antes de crear otra plantilla de producto y revisa los hooks, componentes y store React antes de añadir lógica interactiva equivalente.

## 13. Source of Truth

- Objetivo, rutas y puesta en marcha: `README.md`.
- Dependencias y comandos: `package.json` y `package-lock.json`.
- Build, integraciones, sitemap y dominio: `astro.config.mjs`.
- Tipado: `tsconfig.json`.
- Tema, fuentes y breakpoints activos: `src/styles/global.css` y `tailwind.config.mjs`.
- HTML base y metadatos: `src/layouts/Layout.astro`.
- Rutas y contenido público: `src/pages/`.
- Plantilla compartida de productos: `src/components/ProductServicePage.astro`.

Si una futura área necesita documentación extensa, colócala en `docs/` y enlázala aquí en vez de convertir este archivo en documentación exhaustiva.

## 14. AI Handoff

`AGENTS.md` contiene reglas y contexto permanente del repositorio. No guardes aquí avances, decisiones pendientes, errores temporales ni el estado de una tarea activa.

El repositorio no tiene `docs/AI_HANDOFF.md`. Créalo únicamente cuando un trabajo deba continuar entre agentes y úsalo para el estado temporal: objetivo, cambios realizados, validaciones, pendientes y riesgos. El siguiente agente debe leerlo antes de continuar ese trabajo y actualizarlo o retirarlo cuando deje de ser útil.
