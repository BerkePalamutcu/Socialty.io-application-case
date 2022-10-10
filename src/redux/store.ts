import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import accordionSlice from './slices/accordionSlice';
import { apiDataSlice } from './slices/apiData';

const store = configureStore({
  reducer: {
    toggleAccordion: accordionSlice,
    apiData: apiDataSlice.reducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;

export type Appdispatch = typeof store.dispatch;
export const useAppDispatch: () => Appdispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;

export default store;
