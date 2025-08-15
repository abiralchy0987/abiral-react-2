import {useState} from 'react';
import InputField from './inputField';

const State =() => {
    const[state, set] = useState('');
    const handleChange = (event) => {
        set(event.target.value);
        console.log(event.target.value);
        <InputField value={state} onChange={handleChange} />
        

    }

}

