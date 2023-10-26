import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FundData } from "types/FundList"

export interface BasedData {
    FundsData : FundData[],
    InstrumentData : FundData[],
    IsLoading : boolean
}

const initialState : BasedData = {
    FundsData : [],
    InstrumentData : [],
    IsLoading : false
}

export const fundsListSlice = createSlice({
    name : "FundsData",
    initialState,
    reducers : {
        SetFunds : ( state, action : PayloadAction<FundData[]> ) => {
            state.FundsData = action.payload;
        },
        SetInstruments : ( state, action : PayloadAction<FundData[]> ) => {
            state.InstrumentData = action.payload;
        },
        SetIsLoading : (state, action : PayloadAction<boolean>) => {
            state.IsLoading = action.payload;
        }
    }
})

export const { SetFunds, SetInstruments, SetIsLoading } = fundsListSlice.actions

export const selectFundsData = (state : FundData) => 
// export const selectInstrumentData = () => {
//     return initialState.InstrumentData 
// }
// export const selectIsLoading = () => {
//     return initialState.IsLoading
// }

export const fundsListReducer = fundsListSlice.reducer
