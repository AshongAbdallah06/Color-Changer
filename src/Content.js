import React from 'react';
import Square from './Square';
import Input from './Input';
import { useRef } from 'react';

const Content = ({ colorValue, setColorValue, hexValue, setHexValue }) => {
    const inputRef = useRef();
    
    return (
        <main>
            <Square 
                colorValue={colorValue}
                hexValue={hexValue}
            />

            <Input 
                inputRef={inputRef}
                setColorValue={setColorValue}
                setHexValue={setHexValue}
            />

        </main>
    );
}

export default Content;
