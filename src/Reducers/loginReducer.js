const loginReducer = (state = { status: false, user: "" }, action) => {
    switch (action.type) {
        case "UPDATE_STATUS":
            state = { ...state, status: action.payload }
            return state;
        case "UPDATE_USER":
            state = { ...state, user: action.payload }
            return state;
        default:
            return state;
    }
}

export default loginReducer;