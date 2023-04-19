# 💈 Mess1ah &nbsp;💇‍♂️💈

Aquí está la página para la barbería Mess1ah, una barbería ubicada en Cerdanyola del Vallés, Barcelona. 

Link: [https://mess1ah.com](https://mess1ah.com)

## Instalación

Se ha utilizado lo siguiente:
- [PUG 🐶](https://github.com/pugjs/pug-cli) (HTML)
- [Stylus 🖊️](https://stylus-lang.com/) (CSS)
- [Puro JS 💛](https://javascript.com/) (JS)

Para instalar estas herramientas utiliza los siguientes comandos:
```bash
npm install -g pug-cli
npm install -g stylus
```

## Desarrollo (dev)
Para desarrollar se recomienda utilizar [VSCode](https://code.visualstudio.com/) con [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Para ver la página con el móvil mientras se está desarrollando se puede utilizar [Cloudflare Tunnel](https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel/) o [Localtunnel](https://theboroer.github.io/localtunnel-www/).

Para compilar los archivos PUG y Stylus mientras se desarrolla utilice los siguientes comandos:
```bash
pug -w index.pug -o public
stylus --watch styles/styles.styl -o public/styles.css
```

## Despliegue (prod)
Para el despliegue se ha utilizado [Cloudflare Pages](https://pages.cloudflare.com/). Haciendo push a `production` la página se despliega en [https://mess1ah.com](https://mess1ah.com) y haciendo push a `dev`a [https://dev.mess1ah.com](https://dev.mess1ah.com/).

**Nota**: el PWA (Progressive Web App) para instalar la app en el móvil solo funciona en producción. (

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)