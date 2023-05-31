//CommonJa
import express from "express";
import router from "./routes/index.js";
const app = express();

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

// definir la carpeta publica
app.use(express.static("public"));

//agrega el router a la app
app.use("/", router);

app.listen(puerto, () => {
  console.log(`El servidor esta funcionando en el puerto ${puerto}`);
});
