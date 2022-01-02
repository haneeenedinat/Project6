import React, { useState } from "react";
import './Calender.css'

export default function Calender (){

  const SelectedServices=JSON.parse( localStorage.getItem("SelectedServices"))
  const [ StartDateEnter,setStartDateEnter]=useState();
  const [Form,setForm]=useState(
    {
      StartDate:'',
      Time:'',
      SelectedServices:SelectedServices
    } 
  )



  const AllTime=[
    {text:'Please Select',value:''},
    {text:'12--3',value:'12--3'},
    {text:'3--6',value:'3--6'},
    {text:'6--9',value:'6--9'},
    {text:'9--12',value:'9--12'},
  ]

  
  const TimeSelected=localStorage.getItem('TimeSelected')
       ?JSON.parse(localStorage.getItem('TimeSelected')):
       localStorage.setItem('TimeSelected',JSON.stringify([]));

const handleStartDate=(e,attr)=>{
setStartDateEnter(e.target.value);
  setForm({...Form , [attr]:e.target.value})
 
}


const handleSelect=(e,attr)=>{
setForm({...Form,[attr]:e.target.value})
}

const handleSubmit=(e)=>{
  e.preventDefault();
  // console.log(StartDateEnter);


       TimeSelected.push(Form);

        


            //  const UserSelected={
            //   time:Form.Time,
            //   startdate:Form.StartDate,
            // }

            // const UserSelectedlocal=localStorage.getItem('UserSelected')
            // ?JSON.parse(localStorage.getItem('UserSelected')):
            // localStorage.setItem('UserSelected',JSON.stringify([]));


            // let newarr=newarr.push(UserSelected)

            // UserSelectedlocal.push(UserSelected)

            // localStorage.setItem('UserSelected',JSON.stringify(UserSelected))

  
       //  TimeSelected.forEach(element => {
        for(let i=0;i<TimeSelected.length-1;i++){
      
        
        if(StartDateEnter===TimeSelected[i].StartDate && TimeSelected[i].Time===Form.Time){
          console.log('yes')
      
          alert("There is a conflict")
       
          break;
        }
        else{
          
          console.log('no');
      
          // localStorage.setItem('UserSelected',JSON.stringify(UserSelected))
        
        }
 
      

      }
 
      localStorage.setItem('TimeSelected',JSON.stringify(TimeSelected)); 
 
}

  return(
    <div className="Calender">
      <div className="CalenderTitle">
        <h2>Select the Time </h2>
      </div>

      <div className="CalenderForm">
        <form onSubmit={handleSubmit}>

          <label>Start Date
         <input type='date' onChange={(e)=>{handleStartDate(e,'StartDate')}}/></label>

         <select onChange={(e)=>{handleSelect(e,'Time')}}>
           {AllTime.map((time)=>{
           return  <option value={time.value}>{time.text}</option>
           })}
         </select>

         <button type='submit' >Submit</button>
        </form>
      </div>

    </div>
  )
}