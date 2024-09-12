import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
import { IoIosPeople } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { FaCity } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import Panadero from "../assets/Panadero.jpg"


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('./assets/Panadero.jpg')] bg-center bg-no-repeat bg-cover bg-opacity-40	">
      <div className="flex items-center justify-between bg-black/60 py-6 px-10 ">
        <img src={Logo} alt="Logo" className="w-48" />
        <p className="text-white uppercase text-center text-4xl font-bold ">
          Sistema de gestión de panificadoras
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-32 	">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          <Link to="/Clientes">
            <button className="border-2 border-black flex items-center justify-around bg-black/60 hover:bg-black  w-52 h-16 rounded-md uppercase text-white font-semibold transition duration-300">
              <IoIosPeople className="w-20 h-20" />Clientes
            </button>
          </Link>
          <Link to="/Articulos">
            <button className="border-2 border-black flex items-center justify-around  bg-black/60 hover:bg-black w-52 h-16 rounded-md uppercase text-white font-semibold transition duration-300 ">
              <AiFillProduct className="w-16 h-16" />
              Artículos
            </button>
          </Link>
          <Link to="/RepartosNuevo">
            <button className="border-2 border-black flex items-center justify-around  bg-black/60 hover:bg-black w-52 h-16 rounded-md uppercase text-white font-semibold transition duration-300 ">
              <FaTruckMoving className="w-16 h-16" />
              Repartos
            </button>
          </Link>
          <Link to="/Repartidores">
            <button className="border-2 border-black flex items-center justify-around bg-black/60 hover:bg-black w-52 h-16 rounded-md uppercase text-white font-semibold transition duration-300 ">
              <GrUserWorker className="w-14 h-14" />
              Repartidores
            </button>
          </Link>
          <Link to="/Localidades">
            <button className="border-2 border-black flex items-center justify-around bg-black/60 hover:bg-black w-52 h-16 rounded-md uppercase text-white font-semibold transition duration-300 ">
              <FaCity className="w-16 h-16" />

              Localidades
            </button>
          </Link>
          <Link to="/Listados">
            <button className="border-2 border-black flex items-center justify-around bg-black/60 hover:bg-black w-52 h-16 rounded-md uppercase text-white font-semibold transition duration-300 ">
              <IoIosPaper className="w-16 h-16" />

              Listados
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
