import { configureStore } from '@reduxjs/toolkit';
import photoReduser from './slices/PhotoSlice';
import serviceReduser from './slices/ServiceSlice';

export const store = configureStore({
  reducer: {
    photo: photoReduser,
    services: serviceReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Нужен для стейтов
export type AppDispatch = typeof store.dispatch; // типы для диспача
