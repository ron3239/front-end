import { configureStore } from '@reduxjs/toolkit';
import stateSlice from './statePay/stateSlice'
import { instructionSlice } from './instruction/instructionSlice';


export const store = configureStore({
    reducer: {
    statePay: stateSlice,
    instruction: instructionSlice.reducer, // Для createSlice и createReducer разный синтаксис
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;