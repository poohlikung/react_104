import React, { useState } from "react";

const FormInput = () => {
  const [value,setValue] = useState({
    title:"",
    address:"",
  })
const [wordSubmit,setWordSubmit] = useState(true)
 
  const hdlOnchange = (e) =>{
    // save all change
    setValue({

      ...value,
      [e.target.name]: e.target.value,
    })
  }
  const hdlSubmit = (e) => {
    e.preventDefault();
    setWordSubmit(!wordSubmit)
    console.log(value);
    console.log(wordSubmit);
  };
  
  return <>
  
  <h1>{value.title}</h1>

  <form onSubmit={hdlSubmit}>
    <label >
      title: 
    </label>
    <input type="text"
    value={value.title}
    onChange={hdlOnchange}
    name="title"
    />
    {/* address */}

       <label >
      address: 
    </label>
    <input type="text"
    value={value.address}
    onChange={hdlOnchange}
    name="address"
    />
    <button type="submit">{wordSubmit?"submit":"nosubmit"}</button>
  </form>
  </>;
};

export default FormInput;
