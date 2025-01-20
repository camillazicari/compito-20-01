import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

configureStore({
    reducer: mainReducer
})