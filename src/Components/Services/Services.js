import React from "react";
import './Services.css';
import ServicesElement from "./ServicesElement";


export default function Services(){

    const WeddingArr=[
        {
            id:'0',
            src:'../img/Services11.jpg',
            title:'Birthday',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus',
            price: "200",
        },
        {
            id:'1',
            src:'../img/Services2.jpg',
            title:'Wedding',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus',
            price: "500",
        },
        {
            id:'2',
            src:'../img/Services13.png',
            title:'Graduation',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus',
            price: "250",
        },

    ]

    const WeddingArrElement=WeddingArr.map((element)=>{
       return   <ServicesElement id={element.id}
                          src={element.src}
                          title={element.title}
                          description={element.description}
                          price={element.price}/>
    })
    

    return(
        <>
        <h2 className="ServicesTitle">Services</h2>
        <div className="Services">

            {/* <div className="ServicesTitle"> */}
             {/* <h2>Services</h2> */}
            {/* </div> */}

            {/* <div className="ServicesElement"> */}
            {WeddingArrElement}
            {/* </div> */}
        
        </div>
        </>
    )
}