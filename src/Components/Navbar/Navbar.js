import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar(){

const [NavbarListMenu,setNavbarListMenu]=useState('ulListMenu');
const [NumberOfClickMenu,setNumberOfClickMenu]=useState(1);
   const handelClickMenu=()=>{
   if(NumberOfClickMenu===1){
    setNavbarListMenu("NavbarListMenu");
    setNumberOfClickMenu(2);
   }

   if(NumberOfClickMenu===2){
      setNavbarListMenu("ulListMenu");
      setNumberOfClickMenu(1)
   }
   }

      return(
            <div className="Navbar">

               <div className="NavbarImg">
                <h1>wedding</h1>
               </div>

               <div className="NavbarList">
              <ul className="ulList">
                     <li className="NavbarListLi"><Link to={'/'}>Home</Link></li>
                     <li className="NavbarListLi">Services</li>
                     <li className="NavbarListLi">About Us</li>
                     <li className="NavbarListLi">Profile</li>
                     <li className="NavbarListLi"><Link to={'/LoginPage'}><button>Login</button></Link></li>

                  <li className="Menu">
                  <i className="fas fa-bars" onClick={handelClickMenu}></i>
                  
                  <ul className={NavbarListMenu}>
                  <div>
                     <li>Home</li>
                     <li>Services</li>
                     <li>About Us</li>
                     <li>Profile</li>
                     <li><button>Login</button></li>
                     </div>
                     </ul>
                    
                     </li>
               </ul>
               </div>

             

            </div>
      )
}