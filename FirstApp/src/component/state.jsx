import React, { useEffect, useState } from 'react'

export default function State() {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(prev => prev + 1);
    }
    
    // const dec = () => {
    //     setCount(prev => prev - 1);
    }
    //useEffect hook
    useEffect(() => console.log("You clicked a button"));

    //Every time when count changes
    useEffect(() => {
        setTimeout(() => {
            setCount((c) => c + 1)
        }, 1000);
    })
    return (
        <div>
            <h1>the count is {count}</h1>
            {/* <button onClick={inc}>increment</button>
            <button onClick={dec}>decrement</button>
            <button onClick={()=> setCount(0)}>Reset</button> */}
        </div>
    )

