import { useState } from "react";
import InputField from "./inputField";

const State = () => {
    const [state, setState] = useState(
    { 
            email: "", 
            password: "",
            username: "", 
            phone: "",
            gender: "",
            subject: []

    });

    const handleChange = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;
        const { name, value } = event.target;
        if(event.target.type === "checkbox") {
            const previousValues = state[name] || [];
            const isChecked = event.target.checked;
            if( previousValues.includes(value) && !isChecked) {
                // If the value is already in the array and unchecked, remove it
                setState({ ...state, [name]: previousValues.filter(v => v !== value) });
            }else if(!previousValues.includes(value) && isChecked) {
                const newValues = [...previousValues, value];
                // If the value is not in the array and checked, add it
                setState({ ...state, [name]: newValues });
            }
            return;
        }
        setState({ ...state, [name]: value })
    }

    console.log("State: ", state);

    return (
        <div className="form">
            <InputField
                type="text"
                onChange={handleChange}
                placeholder="Enter your Username"
                name="username"
                label="Username:"
            />
            <InputField 
                type="email" 
                onChange={handleChange} 
                placeholder="Enter your Email" 
                name="email" 
                label="Email:" 
            />
            <InputField type="password" onChange={handleChange} placeholder="Enter your Password" name="password" label="Password:" />
            <InputField type="number" onChange={handleChange} placeholder="Enter your Phone" name="phone" label="Phone:" />
            
            <label>Gender:</label>

            <InputField type="radio" onChange={handleChange} name="gender" value="male" label="Male:" />
            <InputField type="radio" onChange={handleChange} name="gender" value="female" label="Female:" />

            <label>Subject:</label>
            <InputField type="checkbox" onChange={handleChange} name="subject" value="math" label="Math:" />
            <InputField type="checkbox" onChange={handleChange} name="subject" value="science" label="Science:" />
            <InputField type="checkbox" onChange={handleChange} name="subject" value="english" label="English:" />


            <p>Username: {state.username}</p>
            <p>Email: {state.email}</p>
            <p>Password: </p>
            <p>Phone: {state.phone}</p>
            <p>Gender: {state.gender} </p>
        </div>
    )
}


export default State;