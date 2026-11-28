
"use strict";

// Modulo: Temperatura
// Unidad: °C

export class Temperatura {

    constructor(valor = 20) {
        this.valor = 20;
        this.establecer(valor);
    }

    establecer(valor) {

        if (typeof valor !== "number" ||
            !Number.isFinite(valor) ||
            valor < -273.15) {

            throw new Error("Temperatura no valida.");
        }

        this.valor = valor;
    }

    obtener() {
        return this.valor;
    }

    aKelvin() {
        return this.valor + 273.15;
    }

    desdeKelvin(valor) {

        if (typeof valor !== "number" ||
            !Number.isFinite(valor) ||
            valor < 0) {

            throw new Error("Temperatura Kelvin no valida.");
        }

        this.valor = valor - 273.15;
    }

    aumentar(valor) {

        if (typeof valor !== "number" ||
            !Number.isFinite(valor) ||
            valor < 0) {

            throw new Error("Aumento de temperatura no valido.");
        }

        this.valor += valor;
    }

    disminuir(valor) {

        if (typeof valor !== "number" ||
            !Number.isFinite(valor) ||
            valor < 0) {

            throw new Error("Disminucion de temperatura no valida.");
        }

        this.valor = Math.max(-273.15, this.valor - valor);
    }

}
