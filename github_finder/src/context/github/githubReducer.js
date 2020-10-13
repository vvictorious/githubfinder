export default (state, action) => {
    switch (action.type) {
        case 'SEARCH_USER':
            return {
                ...state,
                users: action.payload
            }

        default:
            return state
    }
}