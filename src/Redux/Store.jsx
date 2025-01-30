import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slices/Inc_Dec'

export const store = configureStore({
    reducer: {
        count: counterSlice
    },
})