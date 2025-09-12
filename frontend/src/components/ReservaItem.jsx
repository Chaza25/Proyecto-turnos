function ReservaItem({ id, vecino, depto, servicio, fecha, hora, cantidad, observaciones, estado, onCancelar}) {
    return(
            <tr className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                <td className="p-2 border">{id}</td>
                <td className="p-2 border">{vecino}</td>
                <td className="p-2 border">{depto}</td>
                <td className="p-2 border">{servicio}</td>
                <td className="p-2 border">{fecha}</td>
                <td className="p-2 border">{hora}</td>
                <td className="p-2 border">{cantidad}</td>
                <td className="p-2 border">{observaciones}</td>
                <td className="p-2 border">{estado}</td>
                <td className="p-2 border flex justify-center">
                    <button
                    onClick={onCancelar}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors">
                        Cancelar
                    </button>
                </td>
            </tr>
    )
}

export default ReservaItem;