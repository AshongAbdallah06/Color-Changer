import React from 'react';
import colorNames from 'colornames';


const Input = ({ setColorValue, setHexValue, inputRef }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="text">Add Color Name:</label>
            <input 
                autoFocus
                ref={inputRef}
                id='text'
                type='text'
                required
                placeholder='Add color name'
                onChange={(e) => {
                    setColorValue(e.target.value === '' ? 'Empty Value' : e.target.value);
                    setHexValue(e.target.value === '' ? '' : colorNames(e.target.value));
                }}
            />
        </form>
    )
}

export default Input