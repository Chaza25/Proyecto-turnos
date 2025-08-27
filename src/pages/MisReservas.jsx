import useReservaStore from "../../store/reservaStore";
import ReservaCard from "../components/ReservaCard";

function MisReservas() {

    const reservasConfirmadas = useReservaStore((state) => state.reservasConfirmadas);

    return(
        <div className="px-6 py-10">
            <h1 className="text-3xl font-bold text-center">Mis reservas</h1>
            <div className="mt-6 space-y-6">
                {reservasConfirmadas.length === 0 ? (
                    <p className="text-center text-lg text-gray-500 mt-6 pt-30">No tienes reservas confirmadas</p>
                ) : (
                    reservasConfirmadas.map((reserva, index) => (
                        <ReservaCard
                            key={index}
                            {...reserva}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default MisReservas;