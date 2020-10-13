import React, {useState} from 'react'

const Search = () => {

    const [text, setText] = useState('')

    const change = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <form className='form'>
                <input 
                    type='text'
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
