import React from 'react'

const Square = ({ colorValue, hexValue }) => {
    return (
        <section className="square" style={{ 
                backgroundColor: `${colorValue === 'Empty Value' ? '' : colorValue}` 
            }}>
                  
            <p className="text">
                {colorValue}
            </p>
            <p className="text">
                {hexValue}
            </p>
        </section>
    )
}

export default Square