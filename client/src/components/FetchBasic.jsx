import React, { useEffect, useState } from "react";
const url = "https://6a9463640e895b145e5f6c44.mockapi.io/todos";
const FetchBasic = () => {
  const [user, setUser] = useState([]);
  
  
  const fetchUrl = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setUser(data);
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return <div>FetchBasic

    {user.map((item,index)=>(
        
        <div key={index}>
            <p>ID: {item.id}</p>
            <p>name: {item.name}</p>
            </div>
    ))}
  </div>;
};

export default FetchBasic;
