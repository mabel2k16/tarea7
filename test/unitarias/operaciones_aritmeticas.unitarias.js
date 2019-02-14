const { expect } = require('chai');
const math = require('mathjs');
const operacionesAritmeticas = require('../../operaciones_aritmeticas');
const operacionesAvanz = require('../../operaciones-avanzadas');

describe('Suma', () => {
  it('debe sumar dos números', () => {
    const resultado = operacionesAritmeticas.suma(2, 2);
    expect(resultado).to.equals(2 + 2);
  });

  it('debe sumar un dígito mayor a cero y cero ', () => {
    const resultado = operacionesAritmeticas.suma(6, 0);
    expect(resultado).to.equals(6 + 0);
  });

  it('debe sumar números negativos ', () => {
    const resultado = operacionesAritmeticas.suma(-2, -1);
    expect(resultado).to.equals((-2) + (-1));
  });
});

describe('Resta', () => {
  it('debe restar dos números', () => {
    const resultado = operacionesAritmeticas.resta(2, 2);
    expect(resultado).to.equals(2 - 2);
  });

  it('debe restar un dígito mayor a cero y cero ', () => {
    const resultado = operacionesAritmeticas.resta(6, 0);
    expect(resultado).to.equals(6 - 0);
  });

  it('debe restar números negativos ', () => {
    const resultado = operacionesAritmeticas.resta(-2, -1);
    expect(resultado).to.equals((-2) - (-1));
  });
});

describe('Multiplicacion', () => {
  it('debe multiplicar dos números', () => {
    const resultado = operacionesAritmeticas.multiplicacion(2, 2);
    expect(resultado).to.equals(2 * 2);
  });

  it('debe multiplicar un dígito mayor a cero y cero ', () => {
    const resultado = operacionesAritmeticas.multiplicacion(6, 0);
    expect(resultado).to.equals(6 * 0);
  });

  it('debe multiplicar números negativos ', () => {
    const resultado = operacionesAritmeticas.multiplicacion(-2, -1);
    expect(resultado).to.equals((-2) * (-1));
  });
});

describe('Division', () => {
  it('debe divide dos números', () => {
    const resultado = operacionesAritmeticas.division(2, 9);
    expect(resultado).to.equals(2 / 9);
  });

  it('b deber ser diferente de 0', () => {
    const resultado = operacionesAritmeticas.division(6, 0);
    expect(resultado).to.equals(0);
  });

  it('a puede ser 0', () => {
    const resultado = operacionesAritmeticas.division(0, 6);
    expect(resultado).to.equals(0);
  });

  it('debe dividir numeros negativos ', () => {
    const resultado = operacionesAritmeticas.division(-2, -1);
    expect(resultado).to.equals((-2) / (-1));
  });
});

describe('Hipotenusa', () => {
  it('a debe ser diferente a 0', () => {
    const resultado = operacionesAvanz.hipotenusa(0, 3);
    expect(resultado).to.equals(0);
  });

  it('b debe ser diferente a 0', () => {
    const resultado = operacionesAvanz.hipotenusa(10, 0);
    expect(resultado).to.equals(0);
  });

  it('b deben ser mayor a 0', () => {
    const resultado = operacionesAvanz.hipotenusa(10, -20);
    expect(resultado).to.equals(0);
  });

  it('a deben ser mayor a 0', () => {
    const resultado = operacionesAvanz.hipotenusa(-10, 20);
    expect(resultado).to.equals(0);
  });

  it('a y b deben ser mayor a 0', () => {
    const resultado = operacionesAvanz.hipotenusa(10, 20);
    expect(resultado).to.equals(math.sqrt(math.pow(10, 2) + math.pow(20, 2)));
  });
});
