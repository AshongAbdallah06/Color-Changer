import React from 'react';

const Content = ({ color, setColor }) => {
    
    return (
        <main>
            <div className="ColorContainer" style={{ backgroundColor: `${color === 'Empty Value' ? '' : color}` }}>
                <p className="text">
                    {color}
                </p>
            </div>
            <input 
                id='1'
                type='text'
                placeholder='Add color name'
                onChange={(e) => setColor(e.target.value === '' ? 'Empty Value' : e.target.value)}
            />
        </main>
    );
}

export default Content;
