import React, { useContext } from 'react'
import GithubContext from '../context/github/githubContext'
import Spinner from '../layout/Spinner'

const Users = () => {

    const githubContext = useContext(GithubContext)

    const { loading, users } = githubContext

    if (loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <div style={userStyle}> 
                {users.map(user => (
                    <h1>wassup wit it</h1>
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users