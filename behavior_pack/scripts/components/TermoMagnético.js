
"use strict";

// Modulo: InterruptorTermomagnetico

export class InterruptorTermomagnetico {

    constructor(corrienteNominal = 10) {

        if (!Number.isFinite(corrienteNominal) ||
            corrienteNominal <= 0) {
            throw new Error("Corriente nominal no valida.");
        }

        this.corrienteNominal = corrienteNominal;
        this.factorCortocircuito = 5;

        this.cerrado = true;
        this.disparo = false;
        this.motivo = null;
    }

    evaluar(corriente, cortocircuito = false) {

        if (!Number.isFinite(corriente)) {
            throw new Error("Corriente no valida.");
        }

        if (!this.cerrado) {
            return {
                protegido: true,
                cerrado: false,
                motivo: this.motivo
            };
        }

        const intensidad = Math.abs(corriente);

        if (cortocircuito ||
            intensidad >= this.corrienteNominal *
            this.factorCortocircuito) {

            return this.disparar("Cortocircuito detectado.");
        }

        if (intensidad > this.corrienteNominal) {
            return this.disparar("Sobrecarga detectada.");
        }

        return {
            protegido: false,
            cerrado: true,
            motivo: null
        };
    }

    disparar(motivo) {

        this.cerrado = false;
        this.disparo = true;
        this.motivo = motivo;

        return {
            protegido: true,
            cerrado: false,
            motivo
        };
    }

    rearmar(corriente = 0, cortocircuito = false) {

        if (!Number.isFinite(corriente)) {
            throw new Error("Corriente no valida.");
        }

        if (cortocircuito ||
            Math.abs(corriente) > this.corrienteNominal) {
            return false;
        }

        this.cerrado = true;
        this.disparo = false;
        this.motivo = null;

        return true;
    }

    obtenerEstado() {
        return {
            cerrado: this.cerrado,
            disparado: this.disparo,
            corrienteNominal: this.corrienteNominal,
            motivo: this.motivo
        };
    }

}
