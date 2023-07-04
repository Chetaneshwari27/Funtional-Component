import Cookies from 'js-cookie'

import React from 'react'

export default function CookiesExample() {
    const SetCookie = () => {
        Cookies.set("Name", "Chetu", {expires: 2})
    }  
    const GetCookie=()=>{
        alert(Cookies.get("Name"))
    }
    const RemoveCookie = () => {
        Cookies.remove("Name");
      }
    return (
        <div>
            <button onClick={SetCookie}>Set Cookie</button>
            <button onClick={GetCookie}>Get Cookie</button>
            <button onClick={RemoveCookie}>Remove Cookie</button>

        </div>
    )
}
