import { configureStore } from '@reduxjs/toolkit';
import calculationReducer from './features/calculationSlice';

const Store1 = configureStore({
  reducer: {
    calculation: calculationReducer,
  },
});

export default Store1;
