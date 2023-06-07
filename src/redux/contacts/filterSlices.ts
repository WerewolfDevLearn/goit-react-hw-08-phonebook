import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    ContactFilter(_, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { ContactFilter } = filterSlice.actions;
