import { configureStore, createSlice } from "@reduxjs/toolkit";
import animalReducer from './animalSlice'

const store = configureStore({
    reducer: {
      animal: animalReducer,
    }
  })

    export default store


    // tips visam lielajam objektam
    export type RootState = ReturnType<typeof store.getState>

    // definēts tips dispatčiem
    export type AppDispatch = typeof store.dispatch
