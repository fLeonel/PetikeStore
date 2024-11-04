# PetikeStore 🐾

**PetikeStore** es una tienda en línea dedicada a productos de cuidado para mascotas. Nuestro producto inicial es un humectante para huellitas y narices, pensado especialmente para mantener la piel de las mascotas hidratada y protegida.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Comandos Disponibles](#comandos-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Características

- 📦 **Catálogo de productos**: Muestra detalles y características del humectante.
- 🛒 **Carrito de Compras**: Permite a los usuarios agregar productos al carrito y ver el total.
- 🖥️ **Optimización para SEO**: Usamos SSR (Server-Side Rendering) con Next.js para mejorar la indexación.
- 🌈 **Estilos Personalizables**: Con Tailwind CSS para facilitar la personalización de la tienda.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript para mejor tipado.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitario para estilos rápidos.
- [Husky](https://typicode.github.io/husky/#/) - Hooks de Git para mantener la calidad del código.
- [ESLint](https://eslint.org/) - Linter para mantener el código limpio y consistente.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone git@github.com:fLeonel/PetikeStore.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd PetikeStore
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Configuración del Proyecto

Este proyecto usa algunas configuraciones adicionales para mejorar la calidad del código y el flujo de trabajo:

- **Husky**: Configurado para ejecutar `npm run lint` antes de cada commit, asegurando que el código cumpla con los estándares de ESLint.
- **ESLint**: Configurado para TypeScript y React, con reglas personalizadas para mantener la consistencia del código.
- **Prettier** (opcional): Podés integrarlo para formatear el código de manera automática.

### Variables de Entorno

Para este proyecto, podrías necesitar configurar variables de entorno para aspectos como la conexión a la base de datos o API keys. Crea un archivo `.env.local` en la raíz del proyecto y define las variables necesarias.

Ejemplo:

```plaintext
NEXT_PUBLIC_API_URL=https://api.tienda.petike.com
```

## Comandos Disponibles

- **Desarrollo**: Para correr el proyecto en modo de desarrollo.

  ```bash
  npm run dev
  ```

- **Construcción**: Compila el proyecto para producción.

  ```bash
  npm run build
  ```

- **Iniciar**: Inicia el proyecto compilado en producción.

  ```bash
  npm run start
  ```

- **Lint**: Ejecuta ESLint en el proyecto.

  ```bash
  npm run lint
  ```

## Estructura del Proyecto

```plaintext
PetikeStore/
├── public/               # Archivos estáticos (imágenes, fuentes, etc.)
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Rutas y páginas de Next.js
│   ├── styles/           # Estilos globales y configuraciones de Tailwind CSS
│   ├── hooks/            # Hooks personalizados (opcional)
│   └── utils/            # Funciones utilitarias y helpers
├── .env.local            # Variables de entorno (no se incluye en el repositorio)
├── .eslintrc.json        # Configuración de ESLint
├── .gitignore            # Archivos ignorados por Git
├── tailwind.config.js    # Configuración de Tailwind CSS
└── tsconfig.json         # Configuración de TypeScript
```

## Contribuir

¡Contribuciones son bienvenidas! Si tenés ideas o encontrás algún problema, por favor abrí un **issue** o envía un **pull request**.

### Pasos para contribuir

1. Hacé un fork del proyecto.
2. Creá una nueva rama (`git checkout -b feature/nueva-feature`).
3. Hacé tus cambios y confirmalos (`git commit -m 'feat: agrega nueva feature'`).
4. Hacé push a la rama (`git push origin feature/nueva-feature`).
5. Abrí un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consultá el archivo [LICENSE](./LICENSE) para más detalles.

---

¡Gracias por visitar PetikeStore! 🐶✨
