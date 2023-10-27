import axios from "axios";
import { useState, useEffect } from 'react'
import { GET_FUNDS_API } from 'constants/api';
import { useAppDispatch } from "hook/hooks";
import { SetFunds, SetInstruments } from 'store/slices';

export const FundListHook = () => {

    const dispatch = useAppDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getFunds = () => {

      setIsLoading(true)
      axios
        .get(GET_FUNDS_API)
        .then(function (response) {
          dispatch(SetFunds(response.data.fundTypes));
          dispatch(SetInstruments(response.data.instruments));
            
        })
        .catch((error) => {})
        .finally(() => {
          setIsLoading(false);
        });
    }

    useEffect(() => {
      getFunds();       
    }, []);


  return {
    dataIsLoading : isLoading
  }
}