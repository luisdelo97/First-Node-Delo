import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonial.js";
const paginaInicio = async (req, res) => {
  const promises = [];

  promises.push(
    Viaje.findAll({
      limit: 3,
    })
  );

  promises.push(
    Testimonial.findAll({
      limit: 3,
    })
  );
  try {
    const resultado = await Promise.all(promises);

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
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
const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
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
