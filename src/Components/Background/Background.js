import React from "react";
import './Background.css'

export default function Background(){
    return(
        <div className="background"
        style={{background: " url('../img/bg.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition: 'center'  }}
        >

        </div>
    )
}