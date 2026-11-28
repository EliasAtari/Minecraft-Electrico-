
"use strict";

import { MotorRealidad } from "./core/MotorRealidad.js";
import { system, world } from "@minecraft/server";

const motorRealidad = new MotorRealidad();

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

if (MOTOR.iniciado) return;

MOTOR.iniciado = true;

  motorRealidad.iniciar();

Diagnostico("Motor de realidad inciciado");

Diagnostico("Esperando el primer ciclo");
  
  system.runInterval(() => {
    
        MOTOR.ticks += 
        CONFIG.intervaloTicks;
        MOTOT.ciclos++;

        ActualizarMotor();

    }, CONFIG.intervaloTicks);
}

function ActualizarMotor() {

  motorRealidad.actualizar(CONFIG.intervaloTicks);
    // Voltaje
    // Corriente
    // Resistencia
    // Potencia
    // Energia

}

IniciarMotor();
