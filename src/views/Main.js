import React, { useEffect } from 'react';

const Main = (props) => {

    useEffect(()=>{
        console.log("Working")
    })

    return (
        <div className="weatherPage" >
            <h1>Star Wars Stuff</h1>
        </div>
    )
}

export default Main;