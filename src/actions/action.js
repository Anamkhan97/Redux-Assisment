import { CHANGE_REGION } from './actionType.js';
import axios from 'axios';
export const loadData = (region) => async (dispatch) => {
    await axios
        .get("https://restcountries.eu/rest/v2/region/" + region)
        .then(res => {
            console.log("data", res.data)
            dispatch(fetchData(res.data));
        })
}
const fetchData = (apiValues) => {
    return {
        type: CHANGE_REGION,
        payload: apiValues
    }
}

