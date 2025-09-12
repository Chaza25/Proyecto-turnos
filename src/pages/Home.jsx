import { useNavigate } from "react-router-dom";
import useReservaStore from "../../store/reservaStore";

function Home() {

    const navigate = useNavigate();
    const setServicio = useReservaStore((state) => state.setServicio);

    const handleReservaQuincho = () => {
        setServicio("Quincho"); //Guarda el servicio seleccionado en el store
        navigate('/reserva'); //Navega a la pagina de reserva
    }

    const handleReservaPileta = () => {
        setServicio("Pileta"); //Guarda el servicio seleccionado en el store
        navigate('/reserva'); //Navega a la pagina de reserva
    }

    return (
        <>
        <div className="mx-auto py-5 text-center bg-amber-200">
            <h1 className="text-3xl font-extrabold p-5">Gestion de reservas de quincho y pileta</h1>
            <p className="text-lg">Plataforma para gestionar las reservas de quincho y pileta en tu edificio</p>
            <h2 className="font-extrabold text-2xl py-5">Recomendaciones y recordatorios</h2>
        </div>
            <div className="min-h-[70vh] w-full grid grid-cols-1 md:grid-cols-2">
                {/* Quincho */}
                <aside className="bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col justify-center p-10">
                    <div className="bg-white rounded-lg shadow-xl drop-shadow-2xl p-6">
                        <h2 className="text-2xl font-bold mb-4 text-center">Reserva y uso de quincho</h2>
                        <ul className="list-disc list-inside space-y-2 py-5">
                        <li>La reserva del quincho se puede realizar con hasta 7 días de anticipación.</li>
                        <li>El horario de uso del quincho es de 10:00 a 18:00 horas todos los dias al mediodia.</li>
                        <li>El horario de uso del quincho por la noche es de domingo a jueves de 19:00 horas a 01:00.</li>
                        <li>El horario de uso del quincho el viernes por la noche es de 19:00 horas a 03:00.</li>
                        <li>El horario de uso del quincho el sábado por la noche es de 19:00 horas a 04:00.</li>
                        <li>Es importante dejar el quincho limpio y en las mismas condiciones en que se encontró.</li>
                        </ul>   
                    </div>
                    {/*Boton de reserva */}
                    <button
                    className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    onClick={handleReservaQuincho}>
                        Reserva tu turno en el quincho
                    </button>
                </aside>

                {/* Pileta */}
                <section className="bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col justify-center p-10">
                    <div className="bg-white rounded-lg shadow-xl drop-shadow-2xl p-6">
                        <h2 className="text-2xl font-bold mb-4 text-center">Reserva y uso de pileta</h2>
                        <ul className="list-disc list-inside space-y-2 py-5">
                        <li>La reserva de la pileta se puede realizar con hasta 01:30 horas de anticipación.</li>
                        <li>El horario de uso de la pileta es de 01:30 horas por turno.</li>
                        <li>El uso de la pileta puede ser compartido con cualquier vecino de el edificio si el dueño del turno lo acepta.</li>
                        <li>Es posible llevar 1 (uno) invitado ajeno al edificio por turno.</li>
                        <li>Es obligatorio el uso de traje de baño adecuado y respetar las normas de convivencia.</li>
                        </ul>
                    </div>
                    {/*Boton de reserva */}
                    <button
                    className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    onClick={handleReservaPileta}>
                        Reserva tu turno en la pileta
                    </button>
                </section>
            </div>
        </>
    );
}

export default Home;