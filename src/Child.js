import React, { useState } from 'react'

function Child({getData}) {
    const [name,setName]=useState("");
    function handleSubmit(e)
    {
        e.preventDefault();
        getData(name);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type='submit' value="Submit"/>
      </form>
    </div>
  )
}

export default Child
