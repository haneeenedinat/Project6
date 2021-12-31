import React from "react";
import './HomeServices.css';
import {Link} from 'react-router-dom'

export default function HomeServices() {
  return (
    <div className="HomeServices">
        <div className="HomeServicesTitle">
       <h2>Our Services</h2>
        </div>
      <div className="HomeServicesImg">

          
        <img src="../img/img4.jpg" alt="Event Planning + Design" />

        <div className="HomeServicesText">
        <p>
          Event Planning + Design A celebration of collaboration. Our
          partnership starts with an intensive one-on-one consultation to help
          us understand the vision for your big day or important event. From
          there, we create a plan customized to your concept. On event day,
          we’ll manage every last logistic and nosey-guest-question, or hand
          things off to you or your team depending on needs and budget.
        </p>
        <button><Link to={'/ServicesPage'}> Services</Link></button>
        </div>
      </div>

    </div>
  );
}
