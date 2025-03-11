import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../redux_toolkit/slice'
export const store = configureStore({
  reducer: {
    paster: pasteReducer,
  },
})