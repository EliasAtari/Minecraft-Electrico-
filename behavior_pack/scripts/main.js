
"use strict";

import { system, world } from "@minecraft/server";

const CONFIG = {
  intervaloTicks: 2,
  diagnosticos: true
};

const MOTOR = {
  iniciado: false,
  ticks: 0,
  ciclos: 0
};

function Diagnostico(mensaje) {
  if (!CONFIG.diagnosticos)
    return;

world.sendMessage(`[SistemaElectrico] ${mensaje}`);
}

function IniciarMotor() {

if (Motor.iniciado) return;

Motor.iniciado = true;

Diagnostico("Motor de realidad inciciado");

Diagnostico("Esperando el primer ciclo");
  
  system.runInterval(() => {
    
        Motor.ticks += CONFIG.intervaloTicks;
        Motor.ciclos++;

        ActualizarMotor();

    }, CONFIG.intervaloTicks);
}

function ActualizarMotor() {
  
    // Voltaje
    // Corriente
    // Resistencia
    // Potencia
    // Energia

}

IniciarMotor();
