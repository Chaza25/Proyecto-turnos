import { useNavigate } from "react-router-dom";
import useReservaStore from "../../store/reservaStore";

function Reservas() {

    const navigate = useNavigate();

    const {
        reserva,
        setFecha,
        setHorario,
        setCantidadPersonas,
        setObservaciones,
        resetReserva,
        confirmarReserva,
    } = useReservaStore();

    const { servicio, fecha, horario, cantidadPersonas, observaciones } = reserva;

    const handleConfirmar = () => {
        // Lógica para confirmar la reserva
        if (!fecha || !horario) {
            console.log("Completar los campos obligatorios");
            return;
        } 
        console.log("Reserva confirmada:", reserva);
        confirmarReserva();
        navigate('/mis-reservas'); // Navega a la pagina de mis reservas
    }

    return(
        <>
            <div className="px-6 py-10">
                <h1 className="text-center font-bold text-3xl mb-6">Reserva de {servicio || "Servicio"}</h1>
            </div>
            {/* Seleccion de fecha y horario en formulario */}
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Seleccionar la fecha *</label>
                    <input 
                        type="date"
                        value={fecha || ""}
                        required
                        onChange={(e) => setFecha(e.target.value)} 
                        className="w-full border rounded-lg px-3 py-2"/>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Seleccionar el horario *</label>
                    <input 
                        type="time"
                        value={horario || ""}
                        required
                        onChange={(e) => setHorario(e.target.value)} 
                        className="w-full border rounded-lg px-3 py-2"/>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Seleccionar cantidad de personas (opcional)</label>
                    <input
                        type="number"
                        value={cantidadPersonas || ""}
                        min={1}
                        onChange={(e) => setCantidadPersonas(e.target.value)}
                        placeholder="Cantidad de personas"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Observaciones (opcional)</label>
                    <textarea 
                    value={observaciones || ""}
                    placeholder="Escribir alguna observacion..."
                    onChange={(e) => setObservaciones(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 h-24 resize-none"
                    />
                </div>

                <p className="font-medium mb-2 text-gray-700">El * indica que es una respuesta obligatoria</p>
            </div>

            <div className="flex justify-center gap-4 mt-6 pb-10">
                <button onClick={handleConfirmar} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg">Confirmar reserva</button>
                <button onClick={resetReserva} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg">Cancelar</button>
            </div>
        </>
    )
}

export default Reservas;