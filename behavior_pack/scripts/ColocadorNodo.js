
"use strict";

import { world } from "@minecraft/server";

const ID_ITEM = "electricidad:nodo_electrico";
const ID_ENTIDAD = "electricidad:nodo_electrico";

world.afterEvents.itemUseOn.subscribe((evento) => {

    const jugador = evento.source;
    const item = evento.itemStack;

    if (!item || item.typeId !== ID_ITEM) return;

    const bloque = evento.block;
    const cara = evento.blockFace;
    const punto = evento.faceLocation;

    const posicion = {
        x: bloque.x + punto.x,
        y: bloque.y + punto.y,
        z: bloque.z + punto.z
    };

    const separacion = 0.04;

    switch (cara) {
        case "Up":
            posicion.y += separacion;
            break;

        case "Down":
            posicion.y -= separacion;
            break;

        case "North":
            posicion.z -= separacion;
            break;

        case "South":
            posicion.z += separacion;
            break;

        case "East":
            posicion.x += separacion;
            break;

        case "West":
            posicion.x -= separacion;
            break;
    }

    jugador.dimension.spawnEntity(ID_ENTIDAD, posicion);

});
