import React, { useState, useEffect } from 'react'

export default function Countdown(props) {
    
    const countDownDate = new Date(props.date).getTime()

    const [time, changeTime] = useState({
        "time": 0
    })

    function Counter() {
        let now = now = new Date().getTime();
        let distance = countDownDate - now 
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        changeTime(() => {
            return { "time": days }
            
        })
    }
    useEffect(()=>{
        Counter()
        let interval = setInterval(Counter,1800000)
        return function cleanup() {
            clearInterval(interval)
        }

    },[])

    function chooseWording(){
        if(time.time>0){
            return `${time.time} days to go`
        }
        if(time.time == 0){
            return `today!`
        }
            return `${-time.time} days ago`

    }

    return (
        <>
        {chooseWording()}
        </>
    )
}
