
"use strict";

// SISTEMA ELECTRICO 2.0
// Modulo: NodoElectrico

export class NodoElectrico {

    constructor(id) {
        this.id = id;
        this.maxUniones = 15;
        this.uniones = [];

        this.escalaArco = 30000; // Voltios por centimetro
        this.pixelCm = 1;

        this.avisos = [];
    }

    conectar(cable) {

        if (!cable || !cable.id) {
            throw new Error("Cable no valido.");
        }

        if (this.uniones.length >= this.maxUniones) {
            return {
                conectado: false,
                motivo: "Nodo saturado: maximo 15 uniones."
            };
        }

        if (this.uniones.some(c => c.id === cable.id)) {
            return {
                conectado: false,
                motivo: "El cable ya esta conectado."
            };
        }

        this.uniones.push(cable);

        return {
            conectado: true,
            motivo: "Cable conectado."
        };
    }

    desconectar(idCable) {
        const indice = this.uniones.findIndex(
            cable => cable.id === idCable
        );

        if (indice === -1) return false;

        this.uniones.splice(indice, 1);
        return true;
    }

    evaluarCable(cable, tiempoSegundos = 1) {

        if (!cable || typeof cable.voltaje !== "number" ||
            !Number.isFinite(cable.voltaje)) {
            throw new Error("Datos del cable no validos.");
        }

        if (!Number.isFinite(tiempoSegundos) ||
            tiempoSegundos < 0) {
            throw new Error("Tiempo no valido.");
        }

        if (cable.aislado) {
            return {
                fuga: false,
                energiaPerdida: 0,
                arco: false
            };
        }

        const conductancia = cable.conductanciaFuga ?? 0.000001;

        if (!Number.isFinite(conductancia) || conductancia < 0) {
            throw new Error("Conductancia de fuga no valida.");
        }

        const voltaje = Math.abs(cable.voltaje);

        const corrienteFuga = voltaje * conductancia;
        const potenciaPerdida = voltaje * corrienteFuga;
        const energiaPerdida = potenciaPerdida * tiempoSegundos;

        const distancia = cable.distanciaArcoCm ?? 1;

        if (!Number.isFinite(distancia) || distancia <= 0) {
            throw new Error("Distancia de arco no valida.");
        }

        const voltajeUmbral = this.escalaArco * distancia;
        const arco = voltaje >= voltajeUmbral;

        const aviso =
            `Falta Aislador | Perdida de Energia: ${energiaPerdida} J`;

        this.avisos.push(aviso);

        return {
            fuga: true,
            corrienteFuga,
            potenciaPerdida,
            energiaPerdida,
            arco,
            cortocircuito: arco,
            aviso
        };
    }

    obtenerUniones() {
        return this.uniones.length;
    }

    obtenerAvisos() {
        return [...this.avisos];
    }

}
