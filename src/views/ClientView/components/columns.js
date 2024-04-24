const printIcon = function (cell, formatterParams, onRendered) {
  return "<i class=ri-delete-bin-6-line></i>";
};

export const columns = [
  {
    formatter: printIcon,
    width: 40,
    hozAlign: "center",
    headerSort: false,
    tabulatorTableholder: true,
    cellClick: () => console.log("hola"),
    vertAlign: "middle",
  },
  {
    headerFilter: true,
    title: "Comunidad",
    field: "comunidad",
    vertAlign: "middle",
  },

  {
    title: "Dirección",
    field: "direccion",
    headerFilter: true,
    vertAlign: "middle",
  },
  {
    title: "Municipio",
    field: "municipio",
    headerFilter: true,
    vertAlign: "middle",
  },

  {
    title: "Presidente",
    field: "presidente",
    headerFilter: true,
    vertAlign: "middle",
  },
  {
    title: "Domicilio presidente",
    field: "domicilio_presidente",
    headerFilter: true,
    headerSort: false,
    vertAlign: "middle",
  },
  {
    title: "Teléfono de contacto",
    field: "telefono_contacto",
    headerFilter: true,
    headerSort: false,
    vertAlign: "middle",
  },
  {
    title: "Servicios",
    field: "servicios",
    headerFilter: true,
    headerSort: false,
    vertAlign: "middle",
  },
];
