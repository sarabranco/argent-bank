import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice'; 
import userReducer from './reducers/userSlice'; 

// Configuration du store Redux
const store = configureStore({
  // Définition des reducers à inclure dans le store
  reducer: {
    auth: authReducer, // Reducer pour la gestion de l'authentification
    user: userReducer, // Reducer pour la gestion des données utilisateur
  },

});

export default store;
