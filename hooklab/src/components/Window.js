import React, { useEffect, useState } from 'react'

function WindowApp(){
    const [size, setSize] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
    })
    return(
        <div>
            <h2>{size}</h2>
        </div>
    )
}

export default WindowApp 

