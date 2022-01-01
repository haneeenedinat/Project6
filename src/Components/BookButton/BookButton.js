import React from "react";
import { Link } from "react-router-dom";
import './BookButton.css'

export default function BookButton(props){
    const handelSelectedObj=()=>{
        console.log(props.SelectedObj)
        localStorage.setItem("SelectedServices",JSON.stringify(props.SelectedObj))
    }

    return(
        <div className="BookButton">

     <Link to={'/OurServicesPage'}> <button type='submit' onClick={handelSelectedObj}>Book Now</button></Link>  
       
        </div>
    )
}