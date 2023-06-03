//CommonJa
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from "dotenv/config";

console.log(process.env.DB_HOST);

const app = express();

//conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

const puerto = process.env.PORT || 4000;

// habilitar pug
app.set("view engine", "pug");

//Obtener el año actual
app.use("/", (req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// definir la carpeta publica
app.use(express.static("public"));

//agrega el router a la app
app.use("/", router);

app.listen(puerto, () => {
  console.log(`El servidor esta funcionando en el puerto ${puerto}`);
});
