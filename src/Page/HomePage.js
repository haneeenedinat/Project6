import React from "react";
import Background from "../Components/Background/Background";
import HomeServices from "../Components/HomeServices/HomeServices";
import Testimonials from "../Components/Testimonials/Testimonials";

export default function HomePage (){
    return(
        <div>
            <Background/>
            <HomeServices/>
            <Testimonials/>
        </div>
    )
}