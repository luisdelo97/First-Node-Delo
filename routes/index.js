import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Inicio");
});
router.get("/nosotros", (req, res) => {
  //render ya espera el nombre de una vista
  res.render("nosotros");
});

export default router;
