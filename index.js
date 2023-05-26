//CommonJa
import express from "express";
import router from "./routes/index.js";
const app = express();

const puerto = process.env.PORT || 4000;

//agrega el router a la app
app.use("/", router);

app.listen(puerto, () => {
  console.log(`El servidor esta funcionando en el puerto ${puerto}`);
});
