import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../src/Pasteslice'

export const store = configureStore({
  reducer: {
    paste:pasteReducer,
  },
})