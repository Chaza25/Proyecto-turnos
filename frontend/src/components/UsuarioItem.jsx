function UsuarioItem({ id, nombre, depto, telefono, email, rol, onEditar, onEliminar }) {
    return(
        <tr className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
            <td className="p-2 border">{id}</td>
            <td className="p-2 border">{nombre}</td>
            <td className="p-2 border">{depto}</td>
            <td className="p-2 border">{email}</td>
            <td className="p-2 border">{telefono}</td>
            <td className="p-2 border">{rol}</td>
            <td className="p-2 border flex justify-center gap-2">
                <button
                    onClick={onEditar}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Editar
                </button>
                <button
                    onClick={onEliminar}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default UsuarioItem;