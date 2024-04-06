import React from "react";

function greet(){
    const currentDate = new Date();
    if(currentDate.getHours() > 0 && currentDate.getHours() < 12){
        return "Good Morning";
    }
    else if(currentDate.getHours() >=12 && currentDate.getHours() < 18){
        return "Good Afternoon";
    }
    else{
        return "Good Evening";
    }
}

function Greeting(){
    return <h1 className="heading"> {greet()} </h1>
}

export default Greeting;