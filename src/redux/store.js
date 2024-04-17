// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Import your reducers here
import userReducer from '../redux/slice/userSlice'
import cartReducer from "./slice/cartReducer";

const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer, // Example
  cart: cartReducer, // Example
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
