export default (state, action) => {
    switch (action.type) {
        case 'SEARCH_USER':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}