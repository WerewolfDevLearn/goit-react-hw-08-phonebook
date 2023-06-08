import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { contactApi } from './contacts/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistedUserReducer } from './auth/slices/authfulfilledSlice';
import { isRefreshingReducer } from './auth/slices/authRefreshingSlice';
import { errorReducer } from './auth/slices/authErrorSlice';
import { isLoadingReducer } from './auth/slices/authIsLoadingSlice';
import { filterReducer } from './contacts/filterSlices';
import { ErrorLogger } from '../utils/notify-MD';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    error: errorReducer,
    isLoading: isLoadingReducer,
    isRefreshing: isRefreshingReducer,
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(contactApi.middleware)
      .concat(ErrorLogger),
  devTools: process.env.NODE_ENV === 'development',
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
