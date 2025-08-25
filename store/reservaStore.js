import { create } from 'zustand';

const useReservaStore = create((set) => ({
    servicioSeleccionado: null, // Quincho o pileta
    fechaSeleccionada: null, // Fecha seleccionada para la reserva
    horarioSeleccionado: null, // Horario seleccionado para la reserva

    //Funciones para actualizar el estado
    setServicio: (servicio) => set({ servicioSeleccionado: servicio }),
    setFecha: (fecha) => set({ fechaSeleccionada: fecha }),
    setHorario: (horario) => set({ horarioSeleccionado: horario }),

    //Funcion para resetear la reserva
    resetReserva: () => set({ 
        servicioSeleccionado: null, 
        fechaSeleccionada: 
        null, horarioSeleccionado: null 
    }),
}));