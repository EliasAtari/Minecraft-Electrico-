
"use strict";

// Modulo: Potencia
// Unidad: W, kW

export class Potencia {

    constructor(valor = 0) {
      this.valor = 0;
      this.establecer(valor);
    }

    establecer(valor) {

        if (typeof valor !== "number" ||
            !Number.isFinite(valor)) {
          throw new Error("Potencia no válida.");
        }

        this.valor = valor;

    }

    calcular(voltaje, corriente) {

        if (typeof voltaje !== "number" ||
            typeof corriente !== "number" ||
            !Number.isFinite(voltaje) ||
            !Number.isFinite(corriente))
          throw new Error("Datos electricos no validos.");
    };
    
    this.valor = voltaje * corriente;
        return this.valor;
    }

    obtener() {
        return this.valor;
    }

    aKilovatios() {
        return this.valor / 1000;
    }

    desdeKilovatios(valor) {
        this.establecer(valor * 1000);
    }
    
}

