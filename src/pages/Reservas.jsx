import useReservaStore from "../../store/reservaStore";

function Reservas() {

    const {
        reserva,
        setFecha,
        setHorario,
        resetReserva,
    } = useReservaStore();

    const { servicio, fecha, horario } = reserva;

    return(
        <>
            <div className="px-6 py-10">
                <h1 className="text-center font-bold text-3xl mb-6">Reserva de {servicio || "Servicio"}</h1>
            </div>
            {/* Seleccion de fecha y horario en formulario */}
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Seleccionar la fecha</label>
                    <input 
                        type="date"
                        value={fecha || ""}
                        onChange={(e) => setFecha(e.target.value)} 
                        className="w-full border rounded-lg px-3 py-2"/>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Selecciona el horario</label>
                    <input 
                        type="time"
                        value={horario || ""}
                        onChange={(e) => setHorario(e.target.value)} 
                        className="w-full border rounded-lg px-3 py-2"/>
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg">Confirmar reserva</button>
                <button onClick={resetReserva} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg">Cancelar</button>
            </div>
        </>
    )
}

export default Reservas;