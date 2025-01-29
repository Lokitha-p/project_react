import { createSlice } from '@reduxjs/toolkit';

const Calculationslice = createSlice({
  name: 'calculation',
  initialState: {
    sum: 0,
    product: 0,
  },
  reducers: {
    updateResult: (state, action) => {
      state.sum = action.payload.sum;
      state.product = action.payload.product;
    },
  },
});

export const { updateResult } = calculationSlice.actions;

export default calculationSlice.reducer;
