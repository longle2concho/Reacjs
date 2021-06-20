import React from 'react';
import { useState } from 'react';

function ColorBoxx() { 
    
    const [color,setColor]=useState(()=>{
    const initcolor=localStorage.getItem('boxcolor') || 'deeppink';
    console.log(initcolor);
    return initcolor; 
    });
    function HandleClick(){
        const newcolor=getRandom();
        setColor(newcolor);
        localStorage.getItem('boxcolor',newcolor);
    }
    return (
        <div className="color-Box" 
        style={{backgroundColor:color}}
        onClick={HandleClick}>
            ColorBox
        </div>

    );
}
function getRandom(){
    const COLOR_LIST=['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random()*3);
    return COLOR_LIST[randomIndex];
}
export default ColorBoxx;