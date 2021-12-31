import React from "react";
import './BookButton.css'

export default function BookButton(props){
    const handelSelectedObj=()=>{
        console.log(props.SelectedObj)
        localStorage.setItem("SelectedServices",JSON.stringify(props.SelectedObj))
    }

    return(
        <div className="BookButton">
        <button type='submit' onClick={handelSelectedObj}>Book Now {props.id}</button>
       
        </div>
    )
}