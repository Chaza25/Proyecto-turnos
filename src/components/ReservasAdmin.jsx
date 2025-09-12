import ReservaItem from "./ReservaItem";

function ReservasAdmin() {

    const reservas = [
        {id: 1, vecino: "juan Perez", depto: "3 A", servicio: "Pileta", fecha: "2024-10-01", hora: "10:00", cantidad: 1, observaciones: "Ninguna", estado: "Confirmada"},
        {id: 2, vecino: "juan Perez", depto: "4 D", servicio: "Quincho", fecha: "2024-10-05", hora: "19:00", cantidad: 15, observaciones: "Ninguna", estado: "Confirmada"}
    ];

    return(
        <div className="w-full min-h-screen bg-gray-100 p-0">
            <div className="bg-white w-full p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Gestion de reservas</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-200 text-left">
                            <tr>
                                <th className="p-2 border">ID</th>
                                <th className="p-2 border">Vecino</th>
                                <th className="p-2 border">Depto</th>
                                <th className="p-2 border">Servicio</th>
                                <th className="p-2 border">Fecha</th>
                                <th className="p-2 border">Hora</th>
                                <th className="p-2 border">Cantidad</th>
                                <th className="p-2 border">Observaciones</th>
                                <th className="p-2 border">Estado</th>
                                <th className="p-2 border">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservas.map((r) => (
                                <ReservaItem
                                key={r.id}
                                id={r.id}
                                vecino={r.vecino}
                                depto={r.depto}
                                servicio={r.servicio}
                                fecha={r.fecha}
                                hora={r.hora}
                                cantidad={r.cantidad}
                                observaciones={r.observaciones}
                                estado={r.estado}
                                onCancelar={() => alert(`Cancelar reserva ${r.id}`)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ReservasAdmin;