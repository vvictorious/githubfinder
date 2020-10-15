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
            case 'GET_REPOS':
                    return {
                        ...state,
                        repos: action.payload,
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
        case 'SET_ALERT':
                return {
                    ...state,
                    alert: action.payload
                } 
        case 'REMOVE_ALERT':
                return  {
                    ...state,
                    alert: null 
                }               
        default:
            return state
    }
}