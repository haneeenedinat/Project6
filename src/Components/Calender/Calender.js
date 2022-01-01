import React, { useState } from "react";
import "./Calender.css";

export default function Calender() {
 
   
    const today=new Date();
    const day=today.getDate();
    const Month=today.getMonth()+1;
    const year=today.getFullYear();
    
    const minDateUesd=year+ '-'+Month+'-'+day;

    const AllTime=[
      {text:'Please Select',value:''},
      {text:'12--3 PM', value:'12--3 PM'},
      {text:'3--6 PM',value:'3--6 PM'},
      {text:'6--9 PM',value:'6--9 PM'},
      {text:'9--12 PM',value:'9--12 PM'}
    ]

    const [timeSlots, setTimeSlots] = useState(AllTime);

    const [StartDateEnter,setStartDateEnter]=useState(minDateUesd);
    const [Form,setForm]=useState(
      {
        startDate:'',
        time:'',
      }
    )


    

    const handleStartDateEnter=(e,attr)=>{
      setStartDateEnter(e.target.value)
      setForm({...Form, [attr] : e.target.value});
      setTimeSlots(AllTime)
      // console.log(Form)
      // console.log(AllTime)


  const TimeSelectedArray=JSON.parse( localStorage.getItem("TimeSelected"))
  ?JSON.parse( localStorage.getItem("TimeSelected")):[];
   
  let   conflict=false;
  let filteredTimeSelectedArray=TimeSelectedArray.filter((element)=>{
   if(element.startDate === StartDateEnter){
   conflict=true;
  }

  else{
     conflict=true
  }
 
     console.log(element.startDate)
     console.log(StartDateEnter)
    //  console.log(timeSlots[element].value)
    //  console.log(element.time)
   return conflict;
  })

  console.log(conflict)


}


   

    

    const handleSelect=(e,attr)=>{
      setForm({...Form,[attr]:e.target.value})
  
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      

     const TimeSelected= localStorage.getItem('TimeSelected')
     ?JSON.parse(localStorage.getItem('TimeSelected')):[];

     TimeSelected.push(Form);

 localStorage.setItem("TimeSelected" ,JSON.stringify(TimeSelected));

 
    }


    

    const stringToDate = (stringDate) => {
      let stringDateValues = ("" + stringDate).split("-");
      let dateValue = new Date(
        stringDateValues[0],
        Number(stringDateValues[1]) - 1,
        stringDateValues[2]
      );
      return dateValue;
    }

    // const handleEndDateEnter=(e,attr)=>{
    //   setEndDateEnter(e.target.value)
    //   setForm({...form,[attr]:e.value.target})
    //   console.log(EndDateEnter)
    // }

  return (
    <div className="Calender">
      <div className="CalenderForm">
        <form onSubmit={handleSubmit}>
          <label>
            Event  Date
            <input type="date" min={minDateUesd} value={StartDateEnter} onChange={(e)=>{handleStartDateEnter(e,'startDate')}}/>
          </label>
{/* 
          <label>
            Event end date
            <input type="date"  min={StartDateEnter} value={EndDateEnter} onChange={(e)=>{handleEndDateEnter(e,'endDate')}}/>
          </label> */}

          <label>
            event time

          <select onChange={(e)=>{handleSelect(e,'time')}} value={Form.time}>
            {AllTime.map((element)=>{
             return  <option value={element.value}>{element.text}</option>
            })}
          </select>

          </label>
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
}
