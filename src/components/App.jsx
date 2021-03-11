/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';

const App = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [headingText, setHeadingText] = useState('Hello');
    const [color, setColor] = useState({backgroundColor:'white'});

    const handleClick = () => {
        setHeadingText(`Hello ${firstName} ${lastName}!`);
    }

    const handleFirstChange = () => {
        setFirstName(event.target.value);
    }
    
    const handleLastChange = () => {
        setLastName(event.target.value);
    }

    const handleMouseOver = () => {
        setColor({backgroundColor:'#66CDAA', color:'white'});
    }

    const handleMouseOut = () => {
        setColor({backgroundColor:'white'});
    }
    

    return (
        <div className='container'>
            <h1>{headingText}</h1>

                <input 
                    name='fName' 
                    placeholder='First Name' 
                    onChange={handleFirstChange}
                    value={firstName}
                />
                <input 
                    name='lName' 
                    placeholder='Last Name' 
                    onChange={handleLastChange}    
                    value={lastName}
                />
                <button 
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={color}
                >
                    Submit
                </button>

        </div>
    );  
}

export default App;