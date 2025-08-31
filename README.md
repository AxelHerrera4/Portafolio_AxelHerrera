# Portafolio - Axel Herrera

Sitio de portafolio creado con React + Vite y Bootstrap (icons).

Qué incluye:
- Presentación breve con foto (coloca tu foto en `public/images/AxelCara.JPG`).
- Sección de herramientas y frameworks.
- Cambio de tema claro/oscuro (persistente en localStorage).
- Selector de idioma (ES / EN).
- Link para descargar CV (`public/00HerreraHojaDeVida.pdf.pdf`).
- Sección de contacto y proyectos (4 proyectos).

Instalación y uso:

```powershell
# instalar dependencias
npm install

# modo desarrollo
npm run dev

# build para producción
npm run build

# desplegar en GitHub Pages (requiere gh-pages)
npm run deploy
```

Despliegue en Vercel:

- Vercel detecta automáticamente proyectos Vite/React. Conecta tu repo y usa los valores por defecto.
- Si Vercel muestra errores en instalación de dependencias, revisa la versión de Node/npm que usa y prueba localmente con la misma versión.

Despliegue en GitHub Pages:

- Si publicarás en `https://<usuario>.github.io/<repo>/` establece la variable de entorno `VITE_BASE` a `/Portafolio_AxelHerrera/` en tu CI o edita `vite.config.js` para poner base = '/Portafolio_AxelHerrera/'.
- `npm run deploy` usa `gh-pages` para subir `dist`.

Notas:
- Agrega tus imágenes en `public/images/` y tu CV en `public/00HerreraHojaDeVida.pdf.pdf`.
- Para problemas en CI (Vercel/GitHub Actions) pega el log y te ayudo a depurarlo.