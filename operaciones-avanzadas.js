const math = require('mathjs');

const hipotenusa = (valor1, valor2) => {
  if (valor1 > 0 && valor2 > 0) {
    return math.sqrt(math.pow(valor1, 2) + math.pow(valor2, 2));
  }
  return 0;
};
module.exports = {
  hipotenusa,
};
