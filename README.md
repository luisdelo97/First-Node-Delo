# Mi primer proyecto con Node.js y Git

Empezamos inicializando git y luego vinculamos el repositorio personal

## 1- Creamos una instancia de npm

instalamos express como una dependencia de produccion **`npm i express`** Es decir, que si se requiere en el servidor donde vamos a publicar nuestro proyecto

Puede ser que ya se instaló express y si abrimos el **_package.jsom_** ya hizo nota como viven aquí dependencias y tenemos **_express_**.

```js
"dependencies": {
    "express": "^4.18.2"
  }
```

También nota cómo nos creó un **_package-lock.json_**. Este archivo usualmente nunca lo debes de modificar

Una carpeta llamada **_node-modules_**, aquí es donde se van instalar todos los que Express requiere o todo lo que requieren las demás dependencias

Luegp vamos a agregar una segunda dependencia **_nodemon_**, que va a ser esta una dependencia de desarrollo, solamente la requerimos en lo que estamos trabajando con nuestro proyecto en desarrollo, entonces le ponemos **`npm i --save-dev nodemon`**

Cómo vamos a estar haciendo muchos cambios en desarrollo, es decir, guardando cambios y agregando más funciones, **_nodemon_**, lo que va a hacer es detectar cambios en esos archivos y va a reiniciar el servidor.De otra forma tendríamos que venir a la terminal de tener el servidor y volverlo a arrancar.

Puedes ver la diferencia como muy notoria **_express_**, es una dependencia de producción, es decir, sobre ella va a estar nuestro proyecto del otro lado, **_nodemon_** va a ser una dependencia que solamente se requiere en desarrollo porque va a estar reiniciando el servidor mientras hacemos cambio en el código, no vas a hacer cambios al código en producción

Entonces en el **_package.jsom_** se vera de esta forma:

```js
"dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
```

### En **_index.js_**

Después vamos a crear aquí un archivo que voy a nombrar **_index.js_** Este va a ser nuestro archivo sobre el cual vamos a configurar express

En **_index.js_** se importa el módulo express utilizando `require("express")`. Esto nos permite utilizar las funcionalidades de Express en el código.

Se crea una instancia de la aplicación Express llamada `app` utilizando const `app = express()`. Esta instancia representa nuestro servidor web y nos permite definir rutas y configuraciones.

Se define una variable `puerto` que obtiene el número de puerto desde la variable de entorno `process.env.PORT`. En este caso, la variable de entorno PORT se utiliza para determinar el puerto en el que se ejecutará el servidor. Si no se encuentra la variable de entorno, se utilizará el puerto 4000 como valor predeterminado.

Se llama al método `.listen()` en la instancia de la aplicación app. Este método inicia el servidor y comienza a escuchar las solicitudes entrantes en el puerto especificado. En este caso, se pasa la variable `puerto` como primer argumento para indicar en qué puerto debe escuchar el servidor.

Dentro de la función de devolución de llamada del método `.listen()`, se muestra un mensaje en la consola indicando que **"el servidor está funcionando y en qué puerto está escuchando"**.

```js
//CommonJa
const express = require("express");

const app = express();

const puerto = process.env.PORT || 4000;

app.listen(puerto, () => {
  console.log(`El servidor esta funcionando en el puerto ${puerto}`);
});
```

### En el archivo package.json

```js
"scripts": {
    "dev": "nodemon index.js"
  },
```

La propiedad `"scripts"` en el archivo **_package.json_** se utiliza para definir comandos personalizados que pueden ser ejecutados mediante el comando `npm run` seguido del nombre del script
`"dev"` es el nombre del script personalizado que hemos creado. Puede ser cualquier nombre que elijamos.

`"nodemon index.js"` es el comando que se ejecutará cuando se invoque `npm run dev`. En este caso, se está utilizando el paquete nodemon para ejecutar el archivo `index.js`. **_Nodemon_** es una herramienta que reinicia automáticamente la aplicación cuando se detectan cambios en los archivos, lo que es útil durante el desarrollo para evitar tener que reiniciar manualmente el servidor cada vez que se realicen modificaciones.

# habilitando Imports y Exports

requied() Esta es una sintaxis que se le conoce como Common JS, no es propia de JavaScript.

Entonces importamos los modulos con `import express from "express";` y en el **_package.json_** colocamos para usar los modulos

```js
"type": "module",
```

invocamos el metodo .get que soporta todos los varbos post patch put delete

con get enviamos una peticion a una url, req: es lo que se envia, res: es lo qie envia se recibe, y dentro los metodos:

send: mostrar algo en pantalla

jsom: envia una respuesta de json entonces en el arg se le pasa un objeto

render: para mostrar una vista

```js
app.get("/nosotros", (req, res) => {
  res.send("Nosotros");
});
```

# Routing en express

Vamos a crear aquí una carpeta que voy a nombrar como **routes**.Y vamos a crear un archivo llamado **_index.js_**.Aquí estaremos colocando todo lo relacionado a las rutas y de esa forma estaremos utilizando, digamos, la misma instancia de Express pero estamos extendiendo o utilizando su router.
y desde este ruter manejamos todas las urls, para liego importar a la app

```js
import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Inicio");
});
router.get("/nosotros", (req, res) => {
  res.send("Nosotros");
});
router.get("/contacto", (req, res) => {
  res.send("Contacto");
});
export default router;
```

---

ahora importamos a la app,luego desde la pagina pruncipal agrega el router con el metodo use que soporta todos los verbos **post, patch ,put, delete**

```js
import router from "./routes/index.js";
//agrega el router a la app
app.use("/", router);
```

# Utilizando el template engine **PUG**

Un template engine es una herramienta que permite generar contenido dinámico en páginas web mediante la combinación de plantillas predefinidas y datos variables. Ayuda a separar la lógica de presentación de la lógica de negocio, facilitando el desarrollo y mantenimiento de aplicaciones web al reutilizar y actualizar fácilmente las plantillas.

instalamoa PUG desde la consola via npm con el comando `npm i pug` como una dependencia de produccion y no de desarrollo

```js
"dependencies": {
    "express": "^4.18.2",
    "pug": "^3.0.2"
  },
```

habilitamos pug en el indx de la app

```js
// habilitar pug
app.set("view engine", "pug");
```

Ahora vamos a crear una carpeta que vamos a nombrar **views** y vamos a crear un archivo que voy a nombrarlo como **_nosotros.pug_**

la sintaxis de pug, con el nombre de la etiqueta espacio y el contenido ,y no se usan etiquetas de cierra y para anidar de usan tabulaciones

```css
h1 Hola
div
  p Desde pug
```

y para imprimir vamos al router y en el .get utilizamos el metodo **render** que espera el nombre de la vista nosotros.pug, esto imprime en el navegador

```js
router.get("/nosotros", (req, res) => {
  //render ya espera el nombre de una vista
  res.render("nosotros");
});
```

# Pasar variables hacia las vistas

Declaramos una variable, y como segundo argumento de render pasamos como atributo lo que queremos renderizar

```js
router.get("/nosotros", (req, res) => {
  const viaje = "Viaje a Alemania";

  //render ya espera el nombre de una vista
  res.render("nosotros", {
    viaje,
  });
});
```

luego pasamos la variable a la vista PUG y para pasar una variable usamos estas sintaxis

```css
p= viaje
||
p #{viaje}
```

# Creando el layout principal o master page

En Pug.js, los "blocks" son estructuras que permiten crear secciones reutilizables de código HTML. Los blocks se utilizan en conjunto con las plantillas en Pug.js para organizar y reutilizar el código de manera eficiente.

Un block se define utilizando la sintaxis block nombre seguido del contenido HTML correspondiente. Por ejemplo: Supongamos que tienes una plantilla base llamada "index.pug" que define la estructura básica de tu página:

```css
doctype html
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title Document
  body
    block contenido
```

Luego, en otra plantilla llamada "nosotros.pug", puedes extender la plantilla base y personalizar el contenido del bloque "content":

```css
extends .layout/index
block contenido
  h1 Hola
  p= viaje
  p #{viaje}
```

y el resultado final seria:

```css
doctype html
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title Document
  body
    h1 Hola
    p= viaje
    p #{viaje}
```

# Agregamos hojas de estilo y archivos estaticos

Ahora agregamos una carpeta nueva llamada **public** donde se encontraran las imagenes y hojas de estilo

para darle acceso a los archivos estaticos:

```js
// definir la carpeta publica
app.use(express.static("public"));
```

Por ultimo agregamos las hojas de estilo al head del index.pug

```js
  link(rel="stylesheet", href="/css/bootstrap.css")
  link(rel="stylesheet", href="/css/style.css")
  link(rel='preconnect' href='https://fonts.googleapis.com')
  link(rel='preconnect' href='https://fonts.gstatic.com' crossorigin='')
  link(href='https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Staatliches&display=swap' rel='stylesheet')
```
