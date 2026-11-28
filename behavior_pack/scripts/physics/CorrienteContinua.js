
"use strict";

// SISTEMA ELECTRICO 2.0
// Modulo from Corriente: Corriente Continua

export class CorrienteContinua {

    constructor(voltaje = 0, corriente = 0) {

        this.voltaje = 0;
        this.corriente = 0;

        this.polaridad = "positiva";
        this.direccion = "directa";

        this.establecerVoltaje(voltaje);
        this.establecerCorriente(corriente);
    }

    establecerVoltaje(valor) {

        if (!Number.isFinite(valor)) {
            throw new Error("Voltaje CC no valido.");
        }

        this.voltaje = valor;

        this.actualizarPolaridad();
    }

    establecerCorriente(valor) {

        if (!Number.isFinite(valor)) {
            throw new Error("Corriente CC no valida.");
        }

        this.corriente = valor;

        this.direccion = valor < 0
            ? "inversa"
            : "directa";
    }

    actualizarPolaridad() {

        this.polaridad = this.voltaje < 0
            ? "negativa"
            : "positiva";
    }

    calcularPotencia() {
        return this.voltaje * this.corriente;
    }

    obtenerEstado() {

        return {
            tipo: "CC",
            voltaje: this.voltaje,
            corriente: this.corriente,
            polaridad: this.polaridad,
            direccion: this.direccion,
            potencia: this.calcularPotencia()
        };
    }
}
