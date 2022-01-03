import React from "react";
import TimeSelectedProfileElement from "./TimeSelectedProfileElement";
import './Profile.css'

export default function Profile() {
  const UserLogin = JSON.parse(localStorage.getItem("UserLogin"))
  ?JSON.parse(localStorage.getItem("UserLogin")):[]

  const TimeSelected = JSON.parse(localStorage.getItem("TimeSelected"))
  ?JSON.parse(localStorage.getItem("TimeSelected")):[];

  const TimeSelectedRender = TimeSelected.map((element, id) => {
    return (
      <TimeSelectedProfileElement
        StartDate={element.StartDate}
        title={element.title}
        price={element.price}
      />
    );
  });

  return (
    <div className="Profile">
      <div className="ProfileTitle">
        <h2>personal information</h2>
      </div>

      <div className="ProfileImgInformation">
      
      <div className="divImg">
          <img src="../img/Profile.png" alt="Profile Img" />
          </div>

        <div className="ProfileInformation">
            <div>
          <div className="ProfileInformationUserName">
              <h2>personal information</h2>
            <h3>UserName : {UserLogin.UserName}</h3>
          </div>

          <div className="ProfileInformationEmail">
            <h3>Email : {UserLogin.Email} </h3>
          </div>

          </div>

          <div className="SelectedServicesInformationProfile">
              <h2>Services information</h2>
              <table>
          <thead>
          <tr>
            <th>Services</th>
            <th>StartDate</th>
            <th>price</th>
          </tr>
        </thead>
        </table>
            <div>{TimeSelectedRender}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
