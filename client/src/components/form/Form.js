import React, { useState } from "react";
import axiosApi from "../utils/AxiosApi";

import Input from "./form/Input";

export default function Form() {
    const [input, setInput] = useState({name: '', surname: ''});

    const handleChange = event =>{
        const { name, value } = event.target;
        console.log(name, value)
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const sendData = async event => {
        event.preventDefault();
        console.log('you pressed submit!', input)

        try {
            const result = await axiosApi.post('/user', input)
            const data = await result;
            console.log('New patient was created', input);
        } catch (err) {
            console.error(err)
        } 
     
    };

 

    return (
    <form onSubmit={sendData}>
        <Input
            label="Name"
            name="name"
            required
            value={input.name} 
            onChange={handleChange}
        />
        <Input
            label="Surname"
            name="surname"
            required
            value={input.surname} 
            onChange={handleChange}
        />
        <button type="submit" value="Submit">Submit</button>
    </form>
      
    );
  }
  