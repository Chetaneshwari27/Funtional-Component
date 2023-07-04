import React from 'react'
import CustomHook from './CustomHook'

export default function Custom2() {
  const [data]=CustomHook('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      {data&& data.map((ele)=>{
        return <p>{ele.name}</p>
      })}
    </div>
  )
}
