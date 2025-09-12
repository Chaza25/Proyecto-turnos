import ServiceCards from "../components/ServiceCards";

function Turnos() {

    const servicios = [
        {id: 1, nombre: "Quincho", descripcion: "Reserva tu turno en el quincho", icono: "🍖"},
        {id: 2, nombre: "Pileta", descripcion: "Reserva tu turno en la pileta", icono: "🏊‍♂️"}
    ]

    return (
        <div className="px-6 py-10">
            <h1 className="text-center text-2xl font-bold mb-6">Selecciona el servicio para reservar el turno</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                {servicios.map(servicio => (
                    <ServiceCards
                        key={servicio.id}
                        nombre={servicio.nombre}
                        descripcion={servicio.descripcion}
                        icono={servicio.icono} />
                ))}
            </div>
        </div>
    );
}

export default Turnos;