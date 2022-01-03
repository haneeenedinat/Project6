import React from "react";
import Background from "../Components/Background/Background";
import HomeServices from "../Components/HomeServices/HomeServices";
import Testimonials from "../Components/Testimonials/Testimonials";

export default function HomePage (){
    const TimeSelected=localStorage.getItem('TimeSelected')
    ?JSON.parse(localStorage.getItem('TimeSelected')):
    localStorage.setItem('TimeSelected',JSON.stringify([]));

    return(
        <div>
            <Background/>
            <HomeServices/>
            <Testimonials/>
        </div>
    )
}