import React from 'react'
import axios from "axios";
import {useEffect } from 'react'
import { GET_FUNDS_API } from 'constants/api';
import { useAppDispatch } from "hook/hooks";
import { SetFunds, SetInstruments, SetIsLoading } from 'store/slices';

const FundListHook = () => {

    const dispatch = useAppDispatch();

    const getFunds = () => {

      dispatch(SetIsLoading(true));
      axios
        .get(GET_FUNDS_API)
        .then(function (response) {
          dispatch(SetFunds(response.data.fundTypes));
          dispatch(SetInstruments(response.data.instruments));
            
        })
        .catch((error) => {})
        .finally(() => {
          dispatch(SetIsLoading(false));
        });
    }

    useEffect(() => {
      getFunds();       
    }, []);


  return {

  }
}

export default FundListHook