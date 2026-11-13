import React from "react";

const Conditionbasic = () => {
  // OR
  const user = undefined || " Poohsamurai" || "hello"
// And
// condition
if(user){
  return <h1>Hello {user}</h1>
}else{
  console.log("False condition")
}
  return <div>Welcome{user}</div>;
};

export default Conditionbasic;
