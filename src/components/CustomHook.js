import { useState, useEffect } from 'react'

export default function CustomHook(url) {
    const [data,setData]=useState(null)

    useEffect((e)=>{
        fetch(url).then((res)=>res.json())
        .then((data)=>setData(data))
        console.log(data)
    },[url])
    return [data]
}
