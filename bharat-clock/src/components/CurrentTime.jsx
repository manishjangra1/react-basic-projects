import React, {useState, useEffect} from "react";

let CurrentTime = () =>{

    let currentTime = new Date();

    //if want to refersh time every second then below method
    const [cTime, setCTime] = useState(new Date());
    useEffect(() =>{
        const interval = setInterval(() => {
            setCTime(new Date());
        }, 1000)

        //clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []); //empty dependency array to run only on mount


 return <p className="lead">This is the current Time: {currentTime.toLocaleTimeString()}</p>
}

export default CurrentTime;