import React, { useRef, useState } from "react";
import Child from "./Child";

//react Forms
//Controlled components= Handle by react
//UnControlled components = Handle by DOM

// function App() {
//   const [name, setName] = useState("");
//   const[password,setPassword]=useState();
//   function handleChange(e)
//   {
//     //if(console.log(e.target.name));
//     if(e.target.name==="Firstname")
//     {
//       const capName=(e.target.value).toUpperCase();
//       setName(capName);
//     }
//     else{
//       setPassword(e.target.value);
//     }
//   }

//   return (
//     <div className="App">
//       <form>
//         <label>First name</label>
//         {/*        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> */}
//         <input
//           type="text"
//           value={name}
//           onChange={handleChange}
//           name="Firstname"
//         />
//         <br />
//         <br />
//         <label>Password</label>
//         <input type="text" value={password} onChange={handleChange}  name="Password"/ >
//         <br />
//         <br />
//         <input type="submit" value="submit" />
//       </form>
//     </div>
//   );
// }

// export default App;



//Uncontrolled

// function App() {
//   const refObj=useRef();
//   console.log(refObj);
//   // function handleSubmit(e)
//   // {
//   //   e.preventDefault();
//   //   console.log(refObj.current.value);
//   // }

//   function handleSubmit(e)
//   {
//     e.preventDefault();
//     console.log((refObj.current.value).toUpperCase());
//   }
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <label>First name</label>
//         <input
//           type="text"
//           ref={refObj}
//         />
//         <input type="submit" value="Submit"/>
//        </form>
//     </div>
//   );
// }

// export default App;



//Lifting State Up
function App()
{
  function getData(data)
  {
    console.log(data);
  }
  return (
    <div>
    <Child getData={getData}/>
    </div>
  )
}
export default App;