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
const paginaViajes = (req, res) => {
  res.render("viajes", {
    pagina: "Viajes",
  });
};
const paginaTestimoniales = (req, res) => {
  res.render("testimoniales", {
    pagina: "Testimoniales",
  });
};

export { paginaInicio, paginaViajes, paginaTestimoniales, paginaNosotros };
