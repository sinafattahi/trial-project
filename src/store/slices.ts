import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FundData, InstrumentData } from "types/FundList"

export interface BasedData {
    FundsData : FundData[],
    InstrumentData : InstrumentData[],
}

const initialState : BasedData = {
    FundsData : [],
    InstrumentData : [],
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
        }
    }
})

export const { SetFunds, SetInstruments } = fundsListSlice.actions
export const fundsListReducer = fundsListSlice.reducer