const INITIAL_STATE = {
    countries: []
}
const countryReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "CHANGE_REGION") {
        return {
            ...state,
            countries: action.payload
        }
    } else {
        return {
            ...state
        }
    }
}

export default countryReducer;
