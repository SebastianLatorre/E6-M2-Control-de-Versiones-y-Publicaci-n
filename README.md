# Mi Portafolio Web

Proyecto: Mi Portafolio Web — Control de Versiones y Publicación

Este repositorio contiene la versión estática de mi portafolio (una sola sección). El objetivo es inicializar control de versiones con Git, subir el proyecto a GitHub y, opcionalmente, publicar el sitio con GitHub Pages.

Contenido del proyecto:

-   `index.html`
-   `assets/css/style.css`
-   `assets/js/script.js`

Link para visualizar pagina web: https://sebastianlatorre.github.io/E6-M2-Control-de-Versiones-y-Publicaci-n/

---

Instrucciones (Windows PowerShell):

1. Inicializar repositorio local

```powershell
cd "<RUTA_DEL_PROYECTO>"
git init
git branch -M main
```

2. Crear el primer commit

```powershell
git add .
git commit -m "Versión inicial del portafolio"
```

3. Crear el repositorio remoto en GitHub

-   Interfaz web:

    1. Abre https://github.com/new
    2. Crea un repositorio público (por ejemplo `mi-portafolio`) y copia la URL remota `https://github.com/<USUARIO>/<REPO>.git`.

4. Enlazar el remoto y subir los cambios (si se ha creado el repo vía web)

```powershell
git remote add origin https://github.com/<mi_USUARIO>/<REPO>.git
git push -u origin main
```

5. Activar GitHub Pages (opcional)

-   Vía web: ir a GitHub a `Settings` -> `Pages`, selecciona `Branch: main` y carpeta `/ (root)`, guardar; la URL tendrá formato `https://<mi_USUARIO>.github.io/<REPO>/`.

Entregable: compartir el enlace al repositorio y la URL pública si activaste GitHub Pages.
