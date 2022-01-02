import React from "react";
import Calender from "../Components/Calender/Calender";
import ServicesElementWithoutButton from "../Components/Services/ServicesElementWithoutButton";

export default function OurServicesPage() {
  const SelectedServices =JSON.parse( localStorage.getItem("SelectedServices"));

  return (
    <div className="OurServicesPage">
      <div className="OurServicesTitle">
        <h2>Our Services</h2>
      </div>

      <div>
        <div className="ServicesElementWithoutButton">
          <ServicesElementWithoutButton
            id={SelectedServices.id}
            src={SelectedServices.src}
            title={SelectedServices.title}
            description={SelectedServices.description}
            price={SelectedServices.price}
          />
        </div>

        <div className="OurServicesCalender">
          <Calender/>
        </div>
      </div>
    </div>
  );
}
