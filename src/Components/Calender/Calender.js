import React, { useState } from "react";
import "./Calender.css";

export default function Calender() {
    const [StartDateEnter,setStartDateEnter]=useState();
    const [EndDateEnter,setEndDateEnter]=useState();
   
    const today=new Date();
    const day=today.getDate();
    const Month=today.getMonth();
    const year=today.getFullYear();
      
    console.log(day)
    // const minDate;

  return (
    <div className="Calender">
      <div className="CalenderForm">
        <form>
          <label>
            Event start date
            <input type="date" />
          </label>

          <label>
            Event end date
            <input type="date" />
          </label>

          <label>
            event time
            <select value=''>
              <option>8--9</option>
              <option>9--10</option>
              <option>10--11</option>
              <option>11--12</option>
            </select>{" "}
          </label>
        </form>
      </div>
    </div>
  );
}
