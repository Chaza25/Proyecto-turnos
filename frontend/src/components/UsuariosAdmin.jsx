// import { useState } from "react";

import UsuarioItem from "./UsuarioItem";

function UsuariosAdmin() {

    const usuarios = [
        { id: 1, nombre: "Juan Pérez", depto: "3 A", email: "juan@mail.com", telefono: "123456789", rol: "user" },
        { id: 2, nombre: "María López", depto: "5 B", email: "maria@mail.com", telefono: "123456789", rol: "user" }
    ];

    // const [usuarios, setUsuarios] = useState([]);

    return (
        <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1 bg-white p-4 rounded-2xl shadow">
                <h2 className="text-xl font-semibold mb-4 text-center">Crear usuario</h2>
                {/* Formulario para crear usuario */}
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="nombre" className="font-semibold text-lg">Nombre</label>
                        <input 
                        id="nombre"
                        type="text"
                        placeholder="Nombre y apellido"
                        className="w-full border border-gray-400 rounded-xl p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="depto" className="font-semibold text-lg">Piso y departamento</label>
                        <input 
                        type="text"
                        id="depto"
                        placeholder="3 A"
                        className="w-full border border-gray-400 rounded-xl p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="telefono" className="font-semibold text-lg">Teléfono</label>
                        <input
                        id="telefono" 
                        type="text"
                        placeholder="123456789"
                        className="w-full border border-gray-400 rounded-xl p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="font-semibold text-lg">Email</label>
                        <input
                        id="email"
                        type="email"
                        placeholder="ejemplo@ejemplo.com"
                        className="w-full border border-gray-400 rounded-xl p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contraseña" className="font-semibold text-lg">Contraseña</label>
                        <input
                        id="contraseña"
                        type="password"
                        placeholder="********"
                        className="w-full border border-gray-400 rounded-xl p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rol" className="text-lg font-semibold">Rol</label>
                        <select id="rol" className="w-full border border-gray-400 rounded-xl p-2 focus:ring-2 focus:ring-green-400 focus:outline-none">
                            <option value="admin">Admin</option>
                            <option value="user">Usuario</option>
                        </select>
                    </div>
                    <button 
                    type="submit"
                    className="w-full text-white text-lg font-semibold border border-black bg-green-500 hover:bg-green-600 rounded-xl p-2 transition-colors duration-500">
                        Crear Usuario
                    </button>
                </form>
            </div>
            {/* Lista de usuarios */}
            <div className="col-span-3 bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold text-xl mb-4 text-center">Lista de usuarios</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-200 text-left"> 
                            <th className="p-2 border">ID</th>
                            <th className="p-2 border">Nombre</th>
                            <th className="p-2 border">Depto</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Teléfono</th>
                            <th className="p-2 border">Rol</th>
                            <th className="p-2 border text-center">Acciones</th>
                        </thead>
                        <tbody>
                            {usuarios.map((u) => (
                                <UsuarioItem 
                                key={u.id}
                                id={u.id}
                                nombre={u.nombre}
                                depto={u.depto}
                                telefono={u.telefono}
                                email={u.email}
                                rol={u.rol}
                                onEditar={() => console.log("Editar", u.id)}
                                onEliminar={() => console.log("Eliminar", u.id)}
                                />  
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UsuariosAdmin;