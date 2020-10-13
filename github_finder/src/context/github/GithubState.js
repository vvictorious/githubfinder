import React, { useReducer } from 'react'
import GithubReducer from './githubReducer'
import GithubContext from './githubContext'
import axios from 'axios'

const GithubState = (props) => {

    const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET

    const initialState = {
        users: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchUser = async (text) => {

        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${githubClientId}
        &client_secret=${githubClientSecret}`)

        dispatch({
            type: 'SEARCH_USER',
            payload: response.data.items
        })
    }



    return (
        <GithubContext.Provider  
            value={{
                users: state.users,
                searchUser
            }}
        >
            {props.children}
        </GithubContext.Provider >
    )
}

export default GithubState
