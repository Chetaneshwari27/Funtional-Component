import React from 'react'
import { useEffect, useState } from 'react'

export default function Debouncing() {
  const [searchItem, setItem]=useState('')
  useEffect(()=>{
    const timer=setTimeout(()=>{
      console.log(searchItem)
    },500)
    return()=>{
      clearTimeout(timer)
    }
  },[searchItem])
  const hadleInputChange=(e)=>{
    setItem(e.target.value)
  }
  return (
    <div>
      <p>Debouncing</p>
      <input type='text' value={searchItem} onChange={hadleInputChange}></input>
    </div>
  )
}
