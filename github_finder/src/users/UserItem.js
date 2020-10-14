import React from 'react'
import {Link} from 'react-router-dom'

const UserItem = ({user: { login, avatar_url, html_url }}) => {


    return (
        <div className='card text-center'>
            <img alt='gh-user' className='round-img' style={{width: '60px'}} src={avatar_url} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className='btn btn-darkbtn-sm my-1'>
                    More
                </Link>
            </div>
        </div>
    )
}

export default UserItem
