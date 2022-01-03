import React from "react";
import BookButton from "../BookButton/BookButton";
import './ServicesElement.css'


export default function ServicesElement(props) {
  return (
    <div className="ServicesElement">
        <div className="ServicesElementImg">
        <img src={props.src} alt={props.title} />
      </div>

      <div className="ServicesElementInformation">
        <div className="ServicesElementTitle">
          <h2>{props.title}</h2>
        </div>

        <div className="ServicesElementDescription">
          <p>{props.description}</p>
        </div>

        <div className="ServicesElementPrice">
        <strong> <p>price : {props.price}</p></strong> 
        </div>

       
      <BookButton  SelectedObj={props}/>
      </div>
      </div>
  );
}
