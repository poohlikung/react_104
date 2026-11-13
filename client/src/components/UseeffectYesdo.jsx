import React, { useEffect, useState } from "react";

const UseeffectYesdo = () => {
  
  const [value,setValue] = useState(0)

    useEffect(()=>{
        console.log('Hello KUY')
    },[value])

  const sayHi = () => {
    console.log("sayHi");
  };
//   ทำทุกครั้งเมื่อมีการเปลี่ยน state
//   sayHi()
  return <div>
    <p>{value}</p>
    <button onClick={()=>{setValue(value+1)
    console.log(value)

    }}>Count</button>
  </div>;
};

export default UseeffectYesdo;
