import React, { useState } from 'react'

export default function LocalStorage() {
    const [name, setName]=useState('')
    const [age, setAge]=useState('')
    const handleDone=()=>{
        localStorage.setItem("Name",name)
        localStorage.setItem("Age",age)
        setName('')
        setAge('')
    }
    const handleremove=()=>{
        localStorage.removeItem("Name")
        localStorage.removeItem("Age")
    }
  return (
    <div>
        <p>Local Storage</p>
        <form onSubmit={(e)=>e.preventDefault()}>
        <h5>Name</h5>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <h5>Age</h5>
        <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}></input>
        <button onClick={handleDone}>Done</button>
        {localStorage.getItem('Name') && (
            <div>
                <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
                 <p>{localStorage.getItem('Age')}</p>
            </div>
         )}
         <div>
            <button onClick={handleremove}>Remove</button>
         </div>
         </form>
    </div>
  )
}
