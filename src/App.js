import Header from './Header';
import Content from './Content';
import { useState } from 'react';
import Footer from './Footer';

function App() {
    const [colorValue, setColorValue] = useState('Empty Value');
    const [hexValue, setHexValue] = useState('');
    const [isDarkText, setIsDarkText] = useState(true);

    return (
        <div className="App">
            <Header title="Color Changer" />

            <Content 
                colorValue={colorValue}
                setColorValue={setColorValue}
                hexValue={hexValue}
                setHexValue={setHexValue}
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}
            />

            <Footer 
            />
        </div>
    );
}

export default App;
