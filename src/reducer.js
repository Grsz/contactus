const initialState = {
    inputs: {
        name: "",
        email: "",
        msg: "",
    },
    errors: [],
    forms: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return initialState
        case'GET_FORMS':
            const { forms } = action;
            return {
                ...state,
                forms
            }
        case 'INPUTCHANGE':
            const { value, id } = action;
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [id]: value
                }
            }
        case 'ERRORS':
            const { errors } = action;
            return {
                ...state,
                errors
            }
        default:
            return state
    }
}
export default reducer