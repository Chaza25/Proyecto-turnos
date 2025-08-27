import { useState } from "react";
import UsuariosAdmin from "../components/UsuariosAdmin";
import ReservasAdmin from "../components/ReservasAdmin";

function Admin() {

    const [activo, setActivo] = useState("usuarios")

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8 gap-6">
            <h1 className="text-2xl font-semibold text-gray-700">Panel de administrador</h1>
            {/*Botones para elegir si entrar a ver los usuarios o las reservas en isla */}
            <div className="inline-flex bg-gray-300 overflow-hidden rounded-full">
                <button 
                onClick={() => setActivo("usuarios")}
                className={`px-6 py-2 text-md font-medium transition-colors 
                ${activo === "usuarios" ? "bg-white text-gray-800" : "text-gray-600 hover:bg-gray-200"}`} >
                    Ver usuarios
                </button>
                <button
                onClick={() => setActivo("reservas")}
                className={`px-6 py-2 text-md font-medium transition-colors
                ${activo === "reservas" ? "bg-white text-gray-800" : "text-gray-600 hover:bg-gray-200"}`}>
                    Ver reservas
                </button>
            </div>
            {/*Contenido que se muestra segun el boton que se presiono */}
            <div className="mt-6">
                {activo === "usuarios" && <UsuariosAdmin />}
                {activo === "reservas" && <ReservasAdmin />}
            </div>
        </div>
    );
}

export default Admin;