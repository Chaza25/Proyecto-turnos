import { create } from 'zustand';

const useReservaStore = create((set) => ({
    reserva: {
        servicio: null,
        fecha: null,
        horario: null,
    },
    setServicio: (servicio) =>
        set((state) => ({
            reserva: { ...state.reserva, servicio }
        })),
    
    setFecha: (fecha) =>
        set((state) => ({
            reserva: { ...state.reserva, fecha}
        })),
    
    setHorario: (horario) =>
        set((state) => ({
            reserva: { ...state.reserva, horario}
        })),

    resetReserva: () =>
        set(() => ({
            reserva: { servicio: null, fecha: null, horario: null}
        })),
}));

export default useReservaStore;