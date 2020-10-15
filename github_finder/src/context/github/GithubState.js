import React, { useReducer } from 'react'
import GithubReducer from './githubReducer'
import GithubContext from './githubContext'
import axios from 'axios'

const GithubState = (props) => {

    const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET

    const initialState = {
        users: [],
        user: {},
        repos: {},
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchUser = async (text) => {
        setLoading()
        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${githubClientId}
        &client_secret=${githubClientSecret}`)

        dispatch({
            type: 'SEARCH_USER',
            payload: response.data.items
        })
    }

    const getUser = async (username) => {
        setLoading()
        const response = await axios.get(`https://api.github.com/users/${username}?client_id=
          ${githubClientId}
          &client_secret=${githubClientSecret}`)

        dispatch({
            type: 'GET_USER',
            payload: response.data
        })
    }

    const getUsersRepos = async (username) => {
        setLoading()
        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
          ${githubClientId}
          &client_secret=${githubClientSecret}`)
        
          dispatch({
              type: 'GET_REPOS',
              payload: response.data
          })
      }    

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }



    return (
        <GithubContext.Provider  
            value={{
                users: state.users,
                user: state.user,
                loading: state.loading,
                searchUser,
                clearUsers,
                getUser,
                getUsersRepos
            }}
        >
            {props.children}
        </GithubContext.Provider >
    )
}

export default GithubState
