# Mi primer proyecto con Node.js y Git

Empezamos inicializando git y luego vinculamos el repositorio personal

## 1- Creamos una instancia de npm

instalamos express como una dependencia de produccion **`npm i express`** Es decir, que si se requiere en el servidor donde vamos a publicar nuestro proyecto

Puede ser que ya se instaló express y si abrimos el **_package.jsom_** ya hizo nota como viven aquí dependencias

y tenemos **_express_**.

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

En **_index.js_** Se importa el módulo express utilizando `require("express")`. Esto nos permite utilizar las funcionalidades de Express en el código.

Se crea una instancia de la aplicación Express llamada `app` utilizando const `app = express()`. Esta instancia representa nuestro servidor web y nos permite definir rutas y configuraciones.

Se define una variable puerto que obtiene el número de puerto desde la variable de entorno `process.env.PORT`. En este caso, la variable de entorno PORT se utiliza para determinar el puerto en el que se ejecutará el servidor. Si no se encuentra la variable de entorno, se utilizará el puerto 4000 como valor predeterminado.

Se llama al método `.listen()` en la instancia de la aplicación app. Este método inicia el servidor y comienza a escuchar las solicitudes entrantes en el puerto especificado. En este caso, se pasa la variable `puerto` como primer argumento para indicar en qué puerto debe escuchar el servidor.

Dentro de la función de devolución de llamada del método `.listen()`, se muestra un mensaje en la consola indicando que el servidor está funcionando y en qué puerto está escuchando. La plantilla de cadena de texto con `` permite concatenar variables dentro del mensaje.

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
