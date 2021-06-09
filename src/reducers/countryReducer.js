const INITIAL_STATE = {
    countries: [], 
    error:null
}
const countryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type ) {
        case "CHANGE_REGION":
        return {
            ...state,
            countries: action.payload
        }
        case "REGION_FAIL":
            return {
                ...state,
                error: action.payload
            }
            default:
                return state;
    } 
    
}

export default countryReducer;
