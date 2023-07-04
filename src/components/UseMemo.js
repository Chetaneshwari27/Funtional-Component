import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(0)
    const count2 = useMemo(() => {
        return count * 2
    }, [count])
    const add = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>Count:{count}</p>
            <p>Count second{count2}</p>
            <button onClick={add}>+</button>
        </div>
    )
}
