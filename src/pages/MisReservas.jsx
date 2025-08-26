import useReservaStore from "../../store/reservaStore";

function MisReservas() {
    const {
        reservasConfirmadas,
    } = useReservaStore();

    const { servicio, fecha, horario, cantidadPersonas, observaciones } = reservasConfirmadas;

    return(
        <>
        <h1 className="text-8xl flex justify-center mx-auto font-extrabold text-center">Mis Reservas</h1>
        {reservasConfirmadas.map((reserva, index) => (
            <div key={index} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 my-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Reserva {index + 1}</h2>
                <p><span className="font-semibold">Servicio:</span> {servicio}</p>
                <p><span className="font-semibold">Fecha:</span> {fecha}</p>
                <p><span className="font-semibold">Horario:</span> {horario}</p>
                {cantidadPersonas && <p><span className="font-semibold">Cantidad de personas:</span> {cantidadPersonas}</p>}
                {observaciones && <p><span className="font-semibold">Observaciones:</span> {observaciones}</p>}
            </div>
        )
        )}
        </>
    )
}

export default MisReservas;