//CommonJa
const express = require("express");

const app = express();

const puerto = process.env.PORT || 4000;

app.listen(puerto, () => {
  console.log(`El servidor esta funcionando en el puerto ${puerto}`);
});
