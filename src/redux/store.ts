import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { contactApi } from './contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistedUserReducer } from './authSlice';
import { errorReducer } from './errorSlice';
import { isLoadingReducer } from './isLoadingSlice';
import { filterReducer } from './filterSlices';
import { ErrorLogger } from '../utils/notify-MD';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    error: errorReducer,
    isLoading: isLoadingReducer,
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
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
