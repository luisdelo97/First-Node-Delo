import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("inicio");
});
router.get("/nosotros", (req, res) => {
  const viaje = "Viaje a Alemania";

  //render ya espera el nombre de una vista
  res.render("nosotros", {
    viaje,
  });
});

export default router;
