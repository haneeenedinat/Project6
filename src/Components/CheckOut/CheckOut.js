import React, { useState } from "react";
import {  useNavigate } from "react-router-dom"
import "./CheckOut.css";

export default function NewPath() {
  const UserLogin=JSON.parse(localStorage.getItem('UserLogin'))
  const navigate = useNavigate();
  const handelNavigate = () => {
    if(UserLogin){
        navigate("/");
        console.log('hhhhh')
    }
    else{
        navigate('/LoginPage')
    }
  };
  return <CheckOut handelNavigate={handelNavigate} />;
}

function CheckOut(props) {
  const SelectedServices = JSON.parse(localStorage.getItem("SelectedServices"));
 
//   ...................................haneen edit


const TimeSelected=localStorage.getItem('TimeSelected')
?JSON.parse(localStorage.getItem('TimeSelected')):
localStorage.setItem('TimeSelected',JSON.stringify([]));
let TotalSelected=0



TimeSelected.forEach(element => {
    // console.log(element.price)
   let  elementPrice=Number(element.price)
//    console.log(elementPrice)
     TotalSelected =TotalSelected+elementPrice;
  
     return TotalSelected
});

// console.log(TotalSelected)




// /............................................

  const [DiscountInput, setDiscountInput] = useState();
  const [Total, setTotal] = useState();
  const [number, setNumber] = useState();
  const [MessageNumber, setMessageNumber] = useState();

  const handleDiscount = (e) => {
    setDiscountInput(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    console.log(DiscountInput);
    if (DiscountInput === "haneen") {
    let priceBefore=TotalSelected;
      let DiscountPercentage = priceBefore * 0.2;
      console.log(DiscountPercentage);
      console.log(priceBefore);
      let priceAfter = priceBefore - DiscountPercentage;
      console.log(priceAfter);
      setTotal(priceAfter);
    }
    console.log(e.target);
    e.target.reset();
  };

  const handleSubmiteform = (e) => {
    e.preventDefault();
    if (number.length !== 10) {
      setMessageNumber("The number consists of 10 digits");
    } else {
      setMessageNumber("");
      props.handelNavigate();
    }


    
  }

  return (
    <div className="CheckOut">
      <div className="CheckOutTitle">{/* <h2>CheckOut Page</h2> */}</div>

      <div className="discountDetails">
        <h2>Discount {"  "} 20%</h2>
        <h2>Discount code : haneen</h2>
      </div>



      <div className="CheckOutFormANDDiscountSection">

      <div className="CheckOutFormDiscount">
          <div className="CheckOutFormDiscountTitle">
            <h4>Your Order</h4>
          </div>

          <div className="SelectedServicesName">
            {/* <p>Services Name :{SelectedServices.title} </p> */}
          </div>

          <div className="SelectedServicesPrice">
            <p>Services Price :{TotalSelected}</p>
          </div>

          <div className="DiscountInputSection">
            <h3>Discount Code</h3>
            <form className="DiscountInputForm" onClick={handleSubmite}>
              <input
                type="text"
                placeholder="Discount Code"
                onChange={handleDiscount}
              />
              <button type="submit">Discount</button>
            </form>
            <p> <strong>The Price After Discount :{Total} </strong></p>
          </div>
        </div>


        <div className="CheckOutForm">
          <div className="CheckOutFormTitle">
            <h4>CheckOut Form </h4>
          </div>

          <form onSubmit={handleSubmiteform}>
            <div className="PersonalInformationCheckOut">
              <p>Personal Information</p>
              <input type="text" placeholder="UserName" className="input" required />
              <input type="email" placeholder="Email" className="input"  required />
              <input
                type="text"
                placeholder="Mobile Number"
                className="input"
                required
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
              <small>{MessageNumber}</small>
            </div>

            <div className="AddressInformationCheckOut">
              <p>Address Information</p>
              <input type="text" placeholder="Address1" className="input" required />
              <input type="text" placeholder="Address2" className="input"/>
            </div>

            <div>
              <input type="checkbox"  required /> <span>Cash on delivery</span>
             
            </div>
            <div>
              <button>Checkout</button>
            </div>
          </form>
        </div>

        
      </div>
    </div>
  );
}
