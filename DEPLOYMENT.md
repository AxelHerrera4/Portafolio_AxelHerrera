# Guía de Despliegue - Portafolio Axel Herrera

Este portafolio está configurado para desplegarse automáticamente en GitHub Pages.

## 🚀 Despliegue Automático

### Paso 1: Preparar el proyecto
El proyecto ya está configurado con todo lo necesario:
- ✅ Configuración de Vite para GitHub Pages (`vite.config.js`)
- ✅ Scripts de despliegue en `package.json`
- ✅ Dependencia `gh-pages` instalada

### Paso 2: Ejecutar el despliegue
Ejecuta el siguiente comando en la terminal:

```bash
npm run deploy
```

Este comando:
1. Construye el proyecto automáticamente (`npm run build`)
2. Despliega los archivos a la rama `gh-pages`
3. Los archivos quedan disponibles en GitHub Pages

### Paso 3: Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. Selecciona la rama **gh-pages**
5. Haz clic en **Save**

### 🌐 URL del sitio web
Una vez configurado, tu portafolio estará disponible en:
```
https://axelherrera4.github.io/Portafolio_AxelHerrera/
```

## 📝 Comandos disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Vista previa del build de producción
- `npm run deploy` - Despliega automáticamente a GitHub Pages

## 🛠️ Actualizar el sitio web

Para actualizar tu portafolio:
1. Realiza los cambios necesarios en el código
2. Confirma los cambios con git (`git add .`, `git commit`, `git push`)
3. Ejecuta `npm run deploy` para actualizar el sitio web

## ⚙️ Configuración técnica

El proyecto utiliza:
- **Vite** como bundler
- **React** para la interfaz
- **GitHub Pages** para el hosting
- **gh-pages** para el despliegue automático

La configuración del base path (`/Portafolio_AxelHerrera/`) en `vite.config.js` asegura que todos los recursos se carguen correctamente en GitHub Pages.