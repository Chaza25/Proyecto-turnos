function ReservaCard({ servicio, fecha, horario, cantidadPersonas, observaciones }) {
    return(
        <>
            {/* Card Individual */}
                <div className="flex flex-col bg-white rounded-2xl shadow-lg p-6 border border-gray-200 max-w-md mx-auto mt-8">
                    <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Reserva de {servicio}</h2>
                    <div className="space-y-2 text-gray-600">
                        <p><span className="font-medium">Fecha:</span> {fecha}</p>
                        <p><span className="font-medium">Horario:</span> {horario}</p>
                        {cantidadPersonas && <p><span className="font-medium">Cantidad de personas:</span> {cantidadPersonas}</p>}
                        {observaciones && <p><span className="font-medium">Observaciones:</span> {observaciones}</p>}
                    </div>
                    <div className="flex justify-center gap-4 mt-6">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300">Cancelar reserva</button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300">Editar reserva</button>
                    </div>
                </div>
        </>
    )
}

export default ReservaCard;