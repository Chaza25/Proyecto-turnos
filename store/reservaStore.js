import { create } from 'zustand';

const useReservaStore = create((set) => ({
    reserva: {
        servicio: null,
        fecha: null,
        horario: null,
        cantidadPersonas: null,
        observaciones: null,
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
    
    setCantidadPersonas: (cantidadPersonas) =>
        set((state) => ({
            reserva: { ...state.reserva, cantidadPersonas}
        })),

    setObservaciones: (observaciones) =>
        set((state) => ({
            reserva: { ...state.reserva, observaciones}
        })),

    resetReserva: () =>
        set(() => ({
            reserva: { servicio: null, fecha: null, horario: null, cantidadPersonas: null, observaciones: null }
        })),

    reservasConfirmadas: [],

    confirmarReserva: () =>
        set((state) => ({
            reservasConfirmadas: [...state.reservasConfirmadas, state.reserva],
            reserva: { servicio: null, fecha: null, horario: null, cantidadPersonas: null, observaciones: null }
        })),
}));

export default useReservaStore;