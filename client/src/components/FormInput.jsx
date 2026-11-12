import React, { useState } from "react";

const FormInput = () => {
  // js

// object Form
  const [value, setValue] = useState({
    title: "",
    address: "",
  });

  // event on change
  const hdlOnchange = (e) => {
    // setvalue
    setValue({
      
      // save all value
      ...value,
      // name == value change 
      [e.target.name]: e.target.value,
    });
  };
// event submit
  const hdlOnsubmit = (e) => {
    // on refesh
    e.preventDefault();

    // console log after submit return value all object
    console.log(value);
  };


  return <>

  {/* header change */}
  <h1>Change value : {value.title}</h1>

  {/* open form and call function submit */}
  <form onSubmit={hdlOnsubmit}>
  {/* title */}
  <label >Title: </label>
  <input 
  name="title"
  type="text" 
  value={value.title}
  onChange={hdlOnchange}
  />
  {/* address */}
  <label >address</label>
  <input 
  name="address"
  type="text" 
  value={value.title}
  onChange={hdlOnchange}/>
{/* submit button */}
  <button>Submit จ้าา</button>
  </form>
  
  
  </>;
};

export default FormInput;
