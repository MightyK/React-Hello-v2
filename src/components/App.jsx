/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';

const App = () => {
    const [contact, setContact] = useState({
        fName: '',
        lName: '',
        email: ''
    });
    
    const {fName, lName, email} = contact;

    const [headingText, setHeadingText] = useState('Hello');
    const [color, setColor] = useState({backgroundColor:'white'});
    const [mail, setMail] = useState('');

    const handleClick = () => {
        setHeadingText(`Hello ${fName} ${lName}!`);
        setMail(email);
    }
    
    
    const handleChange = (event) => {
        const {value, name} = event.target;
        
        setContact((prevValue) => {
            if (name === 'fName') {
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                }
            } else if (name === 'lName') {
                return {
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email
                }
            } else if (name === 'email') {
                return {
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value
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
            <p>{mail}</p>

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
                <input
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={email}
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