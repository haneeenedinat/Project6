import React from "react";
import './Background.css'

export default function Background(){
    return(
        
        <div className="background">

        <div className="backgroundImg"
        style={{
            background: `linear-gradient(190deg, #ffffff , rgba(0, 0, 1, 0)), url('../img/bg.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

            <div className="TextBackground">
              <div> we are...</div>
              <div>an event, design, planning and creative consulting company specializing in customized experiences for our clients and their guests.</div>
            </div>

        </div>

        </div>
    )
}