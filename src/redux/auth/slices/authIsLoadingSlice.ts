import { createSlice } from '@reduxjs/toolkit';
import { register, userlogin, logOut } from '../authOps';

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

      .addCase(register.fulfilled, () => false)
      .addCase(userlogin.fulfilled, () => false)
      .addCase(logOut.fulfilled, () => false)

      .addCase(register.rejected, () => false)
      .addCase(userlogin.rejected, () => false)
      .addCase(logOut.rejected, () => false);
  },
});

export const isLoadingReducer = isLoadingSlice.reducer;
