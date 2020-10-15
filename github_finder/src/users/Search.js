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
        if (text === '') {
            githubContext.setAlert('Please enter something', 'light')
        } else {
            githubContext.searchUser(text)
            setText('')
        }
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
                {githubContext.users.length > 0 && (
                    <button className='btn btn-light btn-block' onClick={githubContext.clearUsers} >Clear</button>
                )}                
            </form>
        </div>
    )
}

export default Search
