const INITIAL_STATE = {
    apiValues: []
}
const mainReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "CHANGE_REGION") {
        return {
            ...state,
            apiValues: action.payload
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;