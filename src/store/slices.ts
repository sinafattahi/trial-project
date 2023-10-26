import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FundData, InstrumentData } from "types/FundList"

export interface BasedData {
    FundsData : FundData[],
    InstrumentData : InstrumentData[],
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
        SetInstruments : ( state, action : PayloadAction<InstrumentData[]> ) => {
            state.InstrumentData = action.payload;
        },
        SetIsLoading : (state, action : PayloadAction<boolean>) => {
            state.IsLoading = action.payload;
        }
    }
})

export const { SetFunds, SetInstruments, SetIsLoading } = fundsListSlice.actions
export const fundsListReducer = fundsListSlice.reducer