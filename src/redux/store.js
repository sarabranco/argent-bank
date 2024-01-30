import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice'; 
import userReducer from './reducers/userSlice'; 


const store = configureStore({
  
  reducer: {
    auth: authReducer, // Reducer pour la gestion de l'authentification
    user: userReducer, // Reducer pour la gestion des données utilisateur
  },

});

export default store;
