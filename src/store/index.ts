import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import usersReducer from './slices/userSlices';
import favUsersReducer from './slices/favoritesSlice';
import usersDetailsReducer from './slices/userDetailsSlice';

const favoritePersistConfig = {
  key: 'favUsers',
  storage: AsyncStorage,
};

const persistedReducer = combineReducers({
  users: usersReducer,
  favorite: persistReducer(favoritePersistConfig, favUsersReducer),
  usersDetails: usersDetailsReducer,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
