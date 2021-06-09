import { CHANGE_REGION ,REGION_FAIL} from './actionType.js';
import axios from 'axios';
export const getCountries = (region) => async (dispatch) => {
    await axios
        .get("https://restcountries.eu/rest/v2/region/" + region)
        .then(res => {
            console.log("data", res.data)
            dispatch(fetchData(res.data));
        })
        .catch((error) =>{
            dispatch(fetchError());
        });
}
const fetchData = (countries) => {
    return {
        type: CHANGE_REGION,
        payload: countries
    }
}
const fetchError = (error) =>{
    return {
        type: REGION_FAIL,
        payload:error
    }
}

