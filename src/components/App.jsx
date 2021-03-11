/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';

const App = () => {
    const [fullName, setFullName] = useState({
        fName: '',
        lName: ''
    });
    
    const {fName, lName} = fullName;

    const [headingText, setHeadingText] = useState('Hello');
    const [color, setColor] = useState({backgroundColor:'white'});

    const handleClick = () => {
        setHeadingText(`Hello ${fullName.fName} ${fullName.lName}!`);
    }
    
    
    const handleChange = (event) => {
        const {value, name} = event.target;
        
        setFullName((prevValue) => {
            if (name === 'fName') {
                return {
                    fName: value,
                    lName: prevValue.lName
                }
            } else if (name === 'lName') {
                return {
                    fName: prevValue.fName,
                    lName: value
                }
            }
        });
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
                    onChange={handleChange}
                    value={fName}
                />
                <input 
                    name='lName' 
                    placeholder='Last Name' 
                    onChange={handleChange}    
                    value={lName}
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