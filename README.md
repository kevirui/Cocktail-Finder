# 🍹 Cocktail Finder

**Cocktail Finder** es una plataforma web que permite a los usuarios encontrar recetas de tragos y cócteles según los ingredientes disponibles y categorías seleccionadas. Utiliza la API de [TheCocktailDB](https://www.thecocktaildb.com/api.php) para obtener datos actualizados sobre recetas y bebidas.

## 🚀 Demo

🔗 Plataforma en producción: [https://cocktail-finder-lac.vercel.app/](https://cocktail-finder-lac.vercel.app/)  
📂 Repositorio en GitHub: [https://github.com/kevirui/Cocktail-Finder](https://github.com/kevirui/Cocktail-Finder)

## 🧪 Tecnologías utilizadas

- ⚛️ **React** — Biblioteca principal para construir la interfaz.
- 🟦 **TypeScript** — Tipado estático para mayor seguridad y mantenimiento.
- 🧠 **Zustand** — Manejo de estado global simple y eficiente.
- ✅ **Zod** — Validación de formularios y esquemas.
- 🧭 **React Router DOM** — Navegación entre vistas.
- 🎨 **TailwindCSS** — Estilos modernos y responsivos con utilidades.
- 🍸 **TheCocktailDB API** — Fuente de recetas y datos de cócteles.

## ✨ Funcionalidades

- Buscar cócteles según ingredientes ingresados.
- Filtrar recetas por categoría (ej. "Cocktail", "Ordinary Drink", etc.).
- Visualizar detalles de cada bebida: instrucciones, imagen, ingredientes.
- Diseño responsive y atractivo para móviles y escritorio.
- Navegación fluida entre vistas.

## 📦 Instalación local

```bash
git clone https://github.com/kevirui/Cocktail-Finder
cd cocktail-finder
npm install
npm run dev
``

## 🗂️ Estructura del proyecto
``
src/
│
├── components/        # Componentes reutilizables
├── views/             # Vistas principales
├── stores/             # Estado global con Zustand
├── types/             # Tipos con TypeScript
├── services/          # Llamadas a la API
├── layouts/          # Estructura de la web principal
├── utils/          # Schemas zod
├── router.tsx            # Enrutamiento principal
└── main.tsx           # Punto de entrada
``


## 📄 Licencia
Este proyecto está bajo la licencia MIT.

Desarrollado con ❤️ por kevirui
