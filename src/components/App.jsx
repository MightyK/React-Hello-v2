import React, {useState} from 'react';

const App = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [headingText, setHeadingText] = useState('Hello')

    const handleClick = () => {
        setHeadingText(`Hello ${firstName} ${lastName}`)
    }

    return (
        <div className='container'>
            <h1>Hello</h1>
            <form>
                <input name='fName' placeholder='First Name' />
                <input name='lName' placeholder='Last Name' />
                <button 
                    onClick={handleClick}
                >
                    Submit
                </button>
            </form>
        </div>
    );  
}

export default App;