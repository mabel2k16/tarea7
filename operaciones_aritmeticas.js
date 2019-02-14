const suma = (valor1, valor2) => valor1 + valor2;

// otras cuatro operaciones
// !! division

// calcular la hipotenusa (pitágoras) !! importante

const resta = (valor1, valor2) => valor1 - valor2;

const multiplicacion = (valor1, valor2) => valor1 * valor2;
const division = (valor1, valor2) => {
  if (valor2 !== 0) {
    return (valor1 / valor2);
  }
  return 0;
};
module.exports = {
  suma,
  resta,
  multiplicacion,
  division,
};
