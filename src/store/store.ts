import {configureStore} from "@reduxjs/toolkit"
import { fundsListReducer } from "store/slices"

export const Store = configureStore({
    reducer : {
       fundsList : fundsListReducer
    } 
})

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch