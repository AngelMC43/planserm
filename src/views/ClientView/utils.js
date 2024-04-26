export const initialClientTemplate = {
  comunidad: "",
  presidente: "",
  direccion: "",
  municipio: "",
  servicios: [],
  telefono_contacto: 0,
  domicilio_presidente: "",
};

export const addInputs = [
  { title: "Comunidad", type: "text", name: "comunidad" },
  { title: "Presidente", type: "text", name: "presidente" },
  { title: "Dirección", type: "text", name: "direccion" },
  { title: "Municipio", type: "text", name: "municipio" },
  { title: "Teléfono de contacto", type: "text", name: "telefono_contacto" },
  { title: "Domicilio presidente", type: "text", name: "domicilio_presidente" },
  { title: "Servicios", type: "select", name: "servicios" },
];
