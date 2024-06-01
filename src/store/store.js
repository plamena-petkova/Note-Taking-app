import { combineReducers, configureStore } from '@reduxjs/toolkit'
import noteReducer from './noteReducer';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  version:1, 
  storage,
}

const reducer = combineReducers({
  notes: noteReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(createStateSyncMiddleware({
    blacklist: [PERSIST, REHYDRATE, PURGE],
  })),
  devTools: process.env.NODE_ENV !== 'production',
  });

  initMessageListener(store);

  export const persistor = persistStore(store)

