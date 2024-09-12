import React from "react";
import ListaLocalidades from "../componentes/localidades/ListadoLocalidades.jsx";

const Localidades = () => {
  return (
    <div className="flex flex-col bg-[url('./assets/Panadera.jpg')] bg-center bg-no-repeat bg-cover bg-opacity-40">
      <div className="bg-black/60 py-5">
        <p className="text-white uppercase text-center text-3xl">
          SISTEMA DE GESTIÓN DE PANIFICADORAS
        </p>
      </div>
      <div className="">
        <ListaLocalidades />
      </div>
      {/* <div className="px-10">
        <FormularioCliente />
      </div> */}
    </div>
  );
};

export default Localidades;
