export const revisarPresupuesto = (presupuesto, resto) => {
  let clase;

  if (presupuesto / 4 > resto) {
    clase = "notification is-danger is-light";
  } else if (presupuesto / 2 > resto) {
    clase = "notification is-warning is-light";
  } else {
    clase = "notification is-success is-light";
  }
  return clase;
};
