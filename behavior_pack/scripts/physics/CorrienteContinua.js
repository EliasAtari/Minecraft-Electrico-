
"use strict";

import { CONSTANTES } from "../utils/Constantes.js";
import { Voltaje } from "./Voltaje.js";
import { Corriente } from "./Corriente.js";
import { Potencia } from "./Potencia.js";

// Modulo from Corriente: Corriente Continua

export class CorrienteContinua {

    constructor(voltaje = 0, corriente = 0) {

        this.voltaje = new Voltaje(voltaje);
        this.corriente = new Corriente(corriente);
        this.potencia = new Potencia();

        this.polaridad = "positiva";
        this.direccion = "directa";

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

    actualizar() {

        const v = this.voltaje.obtener();
        const i = this.corriente.obtener();

        this.polaridad = v < 0
            ? "negativa"
            : "positiva";

        this.direccion = i < 0
            ? "inversa"
            : "directa";

        this.potencia.calcular(v, i);
    }

    calcularPotencia() {
        return this.potencia.obtener();
    }

    obtenerEstado() {

        return {
            tipo: "CC",
            voltaje: this.voltaje.obtener(),
            corriente: this.corriente.obtener(),
            polaridad: this.polaridad,
            direccion: this.direccion,
            potencia: this.calcularPotencia()
        };
    }
}
