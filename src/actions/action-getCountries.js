import { CHANGE_REGION } from './actionType.js';
import axios from 'axios';
export const getCountries = (region) => async (dispatch) => {
    await axios
        .get("https://restcountries.eu/rest/v2/region/" + region)
        .then(res => {
            console.log("data", res.data)
            dispatch(fetchData(res.data));
        })//error
}
const fetchData = (countries) => {
    return {
        type: CHANGE_REGION,
        payload: countries
    }
}


