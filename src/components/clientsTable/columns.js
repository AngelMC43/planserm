var printIcon = function (cell, formatterParams, onRendered) {
  return "<i class='fa fa-print'></i>";
};

const CustomIconFormatter = (cell, formatterParams, onRendered) => {
  return `<i class="${cell.getValue()}"></i>`;
};

export const columns = [
  {
    formatter: CustomIconFormatter,
    width: 40,
    hozAlign: "center",
    tabulatorTableholder: true,
    // cellClick: function (e, cell) {
    //   alert("Printing row data for: " + cell.getRow().getData().name);
    // },
  },
  {
    title: "Comunidad",
    field: "comunidad",
  },
  {
    title: "Presidente",
    field: "presidente",
  },
  {
    title: "Dirección",
    field: "direccion",
  },
  {
    title: "Municipio",
    field: "municipio",
  },
  {
    title: "Servicios",
    field: "servicios",
  },
  {
    title: "Teléfono de contacto",
    field: "telefono_contacto",
  },
  {
    title: "Domicilio presidente",
    field: "domicilio_presidente",
  },
];
