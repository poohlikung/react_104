import React, { useState } from "react";

const FormInput = () => {
  const [data, setData] = useState({
    title: "",
    address: "",
  });
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <h1>{data.title}</h1>
      <form onSubmit={onSubmit}>
        <label>title: </label>
        <input type="text" name="title" onChange={onChange} />
        <label>address: </label>
        <input type="text" name="address" onChange={onChange} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default FormInput;
