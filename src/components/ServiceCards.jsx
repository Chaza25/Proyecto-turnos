function ServiceCards({nombre, descripcion, icono}) {
    return(
        <>
            {/* Card Individual */}
            <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 border border-gray-300 hover:scale-105 duration-300 transition-transform">
                <span className="text-5xl mb-4">{icono}</span>
                <h2 className="text-xl font-bold text-center mb-2">Servicio: {nombre}</h2>
                <p className="text-center text-gray-600 mb-4 pt-2">Accion: {descripcion}</p>
                <button  
                onClick={onselect}
                className="flex justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl mx-auto transition-colors">
                    Hacer reserva en {nombre}
                    </button>
            </div>
        </>
    )
}

export default ServiceCards;