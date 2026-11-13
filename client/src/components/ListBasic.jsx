import React from "react";

const ListBasic = () => {
  const user = [
    { id: 1, name: "sorawit" },
    { id: 2, name: "poohlikung" },
  ];
  return <div>

  {user.map((item,index)=>{
    return (
    <div key={index}>
    
    <p>name: {item.name}</p>
    </div>)
  })}

  </div>;
};

export default ListBasic;
