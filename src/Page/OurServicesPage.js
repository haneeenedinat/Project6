import React from "react";
import Calender from "../Components/Calender/Calender";
import ServicesElementWithoutButton from "../Components/Services/ServicesElementWithoutButton";
import './OurServicesPage.css'

export default function OurServicesPage() {
  const SelectedServices =JSON.parse( localStorage.getItem("SelectedServices"));

  return (
    <div className="OurServicesPage">
      <div className="OurServicesTitle">
        <h2>Our Services</h2>
      </div>

      <div className="ServicesSelectedandCalender"> 

      <div className="OurServicesCalender">
          <Calender/>
        </div>
        
        <div className="ServicesElementWithoutButton">
          <ServicesElementWithoutButton
            id={SelectedServices.id}
            src={SelectedServices.src}
            title={SelectedServices.title}
            description={SelectedServices.description}
            price={SelectedServices.price}
          />
        </div>

        
      </div>
    </div>
  );
}
