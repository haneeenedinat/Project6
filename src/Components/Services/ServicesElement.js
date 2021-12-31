import React from "react";
import './ServicesElement.css'

export default function ServicesElement(props) {
  return (
    <div className="ServicesElement">
      <div className="ServicesElementImg">
        <img src={props.src} alt={props.title} />
      </div>

      <div className="ServicesElementInformation">
        <div className="ServicesElementTitle">
          <h2> {props.title}</h2>
        </div>

        <div className="ServicesElementDescription">
          <p>{props.description}</p>
        </div>

        <div className="ServicesElementPrice">
          <strong>{props.price}</strong>
        </div>
      </div>
    </div>
  );
}
