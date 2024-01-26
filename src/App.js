import Header from './Header';
import Content from './Content';
import { useState } from 'react';
import Footer from './Footer';

function App() {
    const [color, setColor] = useState('Empty Value');
    // const [input, setInput] = useState('');

    return (
        <div className="App">
            <Header title="Color Changer" />
            <Content 
                color={color}
                setColor={setColor}
                // input={input}
                // setInput={setInput}
            />
            <Footer 
            />
        </div>
    );
}

export default App;
