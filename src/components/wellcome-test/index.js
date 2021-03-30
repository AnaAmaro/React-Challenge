import React from "react";
import HandleTest from "./handle-test";

export default function WellcomeTest({
  onSubmit = HandleTest,
  hooks = "hooks",
  use = "use",
  hoc = "hoc",
}) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>¿Qué son los Hooks?</label>
          <select name="hooks" id="hooks">
            <option value="funciones">Funciones</option>
            <option value="estados">Estados</option>
            <option value="metodos">Métodos</option>
          </select>
        </div>
        <div>
          <label>¿Cual de todos estos es un hook?</label>
          <select name="use" id="use">
            <option value="usereducerback">useReducerback</option>
            <option value="usecontainer">useContainer</option>
            <option value="usestate">useState</option>
          </select>
        </div>
        <div>
          <label>¿Qué es un HOC?</label>
          <select name="hoc" id="hoc">
            <option value="componente">Componente</option>
            <option value="funcion">Función</option>
            <option value="libreria">Librería</option>
          </select>
        </div>
        <div>
          <button type="submit" id="send">
            Enviar
          </button>
          <button type="submit" id="close">
            Cerrar
          </button>
        </div>
      </form>
    </>
  );
}
