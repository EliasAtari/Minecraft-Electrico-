
"use strict";

export class MotorRealidad {

    constructor() {
        this.iniciado = false;
        this.ticks = 0;
        this.ciclos = 0;
        this.redes = new Map();
    }

    iniciar() {
        if (this.iniciado) return false;

        this.iniciado = true;
        return true;
    }

    detener() {
        this.iniciado = false;
    }

    actualizar(deltaTicks = 2) {

        if (!this.iniciado) return;

        if (!Number.isInteger(deltaTicks) || deltaTicks <= 0) {
            throw new Error("Delta de ticks no válido.");
        }

        this.ticks += deltaTicks;
        this.ciclos++;

    }

    obtenerEstado() {
        return {
            iniciado: this.iniciado,
            ticks: this.ticks,
            ciclos: this.ciclos,
            cantidadRedes: this.redes.size
        };
    }

}
