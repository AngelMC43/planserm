const printIcon = function (cell, formatterParams, onRendered) {
  return "<i class=ri-delete-bin-6-line></i>";
};

export const columns = [
  {
    formatter: printIcon,
    width: 40,
    hozAlign: "center",
    tabulatorTableholder: true,
    cellClick: () => console.log("hola"),
  },
  {
    headerFilter: true,
    title: "Comunidad",
    field: "comunidad",
  },
  {
    title: "Presidente",
    field: "presidente",
    headerFilter: true,
  },
  {
    title: "Dirección",
    field: "direccion",
    headerFilter: true,
  },
  {
    title: "Municipio",
    field: "municipio",
    headerFilter: true,
  },
  {
    title: "Servicios",
    field: "servicios",
    headerFilter: true,
  },
  {
    title: "Teléfono de contacto",
    field: "telefono_contacto",
    headerFilter: true,
  },
  {
    title: "Domicilio presidente",
    field: "domicilio_presidente",
    headerFilter: true,
  },
];
