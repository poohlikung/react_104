import React, { useEffect, useState } from "react";
const url = "https://6a9463640e895b145e5f6c44.mockapi.io/todos";
const FetchBasic = () => {
  const [data, setData] = useState([]);
  const fetchUrl = async () => {
    try {
      const resp = await fetch(url);
      const user = await resp.json();
      setData(user);
      console.log(user);
    } catch (error) { 
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUrl();
  }, []);

  return <div>
    {data.map((item,index)=>(
      <div key={index}>
      <p>name : {item.name}</p>
      </div>
    ))}
  </div>;
};

export default FetchBasic;
