import { Viaje } from "../models/Viaje.js";
const paginaInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
};

const paginaNosotros = (req, res) => {
  //render ya espera el nombre de una vista
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};
const paginaViajes = async (req, res) => {
  //consultar db
  const viajes = await Viaje.findAll();
  // console.log(viajes);

  res.render("viajes", {
    pagina: "Proximos Viajes",
    viajes,
  });
};
const paginaTestimoniales = (req, res) => {
  res.render("testimoniales", {
    pagina: "Testimoniales",
  });
};

//muestra el viaje por su slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render("viaje", {
      pagina: "Informacion Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaViajes,
  paginaTestimoniales,
  paginaNosotros,
  paginaDetalleViaje,
};
