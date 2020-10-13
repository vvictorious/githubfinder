import React, { useState, useContext } from 'react'
import GithubContext from '../context/github/githubContext'

const Search = () => {

    const githubContext = useContext(GithubContext)

    const [text, setText] = useState('')

    const change = (e) => {
        setText(e.target.value)
    }

    const searchGithubUsers = (e) => {
        e.preventDefault()
        githubContext.searchUser(text)
    }

    return (
        <div>
            <form onSubmit={searchGithubUsers} className='form'>
                <input 
                    type='text'
                    placeholder='Search Users'
                    value={text}
                    onChange={change}
                />
                <input 
                    className='btn btn-dark btn-block'
                    type='submit'
                />
            </form>
        </div>
    )
}

export default Search
