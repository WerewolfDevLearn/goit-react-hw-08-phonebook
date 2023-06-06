import { createSlice } from '@reduxjs/toolkit';
import { register, userlogin, logOut, getCurrent } from './authOps';

// 0
const initialState = false;

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, () => true)
      .addCase(userlogin.pending, () => true)
      .addCase(logOut.pending, () => true)
      .addCase(getCurrent.pending, () => true)
      .addCase(register.fulfilled, () => false)
      .addCase(userlogin.fulfilled, () => false)
      .addCase(logOut.fulfilled, () => false)
      .addCase(getCurrent.fulfilled, () => false)
      .addCase(register.rejected, () => false)
      .addCase(userlogin.rejected, () => false)
      .addCase(logOut.rejected, () => false)
      .addCase(getCurrent.rejected, () => false);
  },
});

export const isLoadingReducer = isLoadingSlice.reducer;
