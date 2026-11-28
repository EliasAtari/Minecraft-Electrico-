
"use strict";

import { Voltaje } from "./Voltaje.js";
import { Corriente } from "./Corriente.js";
import { Potencia } from "./Potencia.js";
import { Frecuencia } from "./Frecuencia.js";

// Modulo from Corriente: Corriente Alterna

export class CorrienteAlterna {

    constructor(
        voltajeRMS = 220,
        corrienteRMS = 0,
        frecuencia = 60,
        fase = 0
    ) {

        this.voltaje = new Voltaje(voltajeRMS);
        this.corriente = new Corriente(corrienteRMS);
        this.frecuencia = new Frecuencia(frecuencia);
        this.potencia = new Potencia();

        this.fase = 0;

        this.establecerFase(fase);
        this.actualizar();
    }

    establecerVoltaje(valor) {
        this.voltaje.establecer(valor);
        this.actualizar();
    }

    establecerCorriente(valor) {
        this.corriente.establecer(valor);
        this.actualizar();
    }

    establecerFrecuencia(valor) {
        this.frecuencia.establecer(valor);
    }

    establecerFase(valor) {

        if (!Number.isFinite(valor)) {
            throw new Error("Fase no valida.");
        }

        this.fase = valor % 360;
    }

    calcularValorInstantaneo(valorRMS, tiempo) {

        if (!Number.isFinite(valorRMS) ||
            !Number.isFinite(tiempo)) {
            throw new Error("Datos de onda no validos.");
        }

        const amplitud = Math.sqrt(2) * valorRMS;

        const angulo =
            (2 * Math.PI * this.frecuencia.obtener() * tiempo) +
            (this.fase * Math.PI / 180);

        return amplitud * Math.sin(angulo);
    }

    calcularVoltajeInstantaneo(tiempo) {

        return this.calcularValorInstantaneo(
            this.voltaje.obtener(),
            tiempo
        );
    }

    calcularCorrienteInstantanea(tiempo) {

        return this.calcularValorInstantaneo(
            this.corriente.obtener(),
            tiempo
        );
    }

    calcularPeriodo() {
        return this.frecuencia.periodo();
    }

    calcularPotenciaInstantanea(tiempo) {

        const voltaje = this.calcularVoltajeInstantaneo(tiempo);
        const corriente = this.calcularCorrienteInstantanea(tiempo);

        return voltaje * corriente;
    }

    actualizar() {

        this.potencia.calcular(
            this.voltaje.obtener(),
            this.corriente.obtener()
        );
    }

    obtenerEstado() {

        return {
            tipo: "CA",
            voltajeRMS: this.voltaje.obtener(),
            corrienteRMS: this.corriente.obtener(),
            frecuencia: this.frecuencia.obtener(),
            periodo: this.calcularPeriodo(),
            fase: this.fase,
            potenciaAparente: this.potencia.obtener()
        };
    }
}
