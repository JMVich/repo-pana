import React from "react";
import FormularioCliente from "../componentes/FormularioCliente";
import ListadoDeClientes from "../componentes/ListadoDeClientes";

const Clientes = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[url('./assets/Panadera.jpg')] bg-center bg-no-repeat bg-cover bg-opacity-40">
        <div className="bg-black/60 py-5">
          <p className="text-white uppercase text-center text-3xl">
            Sistema de gestión de panificadoras
          </p>
        </div>
        <div className="">
          <ListadoDeClientes />
        </div>
        {/* <div className="px-10">
          <FormularioCliente />
        </div> */}
      </div >
    </>
  );
};

export default Clientes;
