
"use strict";

// Modulo: Voltaje
// Unidad: V, kV, mV

export class Voltaje {

    constructor(valor = 0) {
      this.valor = 0;
      this.establecer(valor);
    }

establecer(valor) {

  if (typeof valor !== "number" ||
      Number.isFinite(valor)) {
    throw new Error("El voltaje debe ser un número valido");
  };

  this.valor = valor;
}

    obtener() {
        return this.valor;
    }

    aMilivoltios() {
        return this.valor * 1000;
    }
  
    aKilovoltios() {
        return this.valor / 1000;
    }

    desdeMilivoltios(valor) {
        this.establecer(valor / 1000);
    }

    desdeKilovoltios(valor) {
        this.establecer(valor * 1000);
    }

}
