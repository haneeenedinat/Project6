import React, { useState } from "react";

export default function CheckOut() {
  const SelectedServices = JSON.parse(localStorage.getItem("SelectedServices"));


  const [SelectedServicesObj, setSelectedServicesObj] = useState({
    title: SelectedServices.title,
    price: SelectedServices.price,
  });
  const [DiscountInput,setDiscountInput]=useState();
  const [Total,setTotal]=useState();

  const handleDiscount=(e)=>{
    setDiscountInput(e.target.value);
  
  }

  const handleSubmite=()=>{
      console.log(DiscountInput)
      if(DiscountInput=='haneen'){
     

    }
         // {Math.round(Number(SelectedServicesObj.price * 0.04 + total()) * 100) / 100}
         let priceAfter=Number(SelectedServices.price)
         let DiscountPercentage=priceAfter*0.2;
         console.log(DiscountPercentage)
      console.log(priceAfter)
  }

  return (
    <div className="CheckOut">
      <div className="CheckOutTitle">
        <h2>CheckOut Page</h2>
      </div>

      <div>
         <h2>Discount 20%</h2>
        <h2>Discount code : haneen</h2>
     
      </div>

      <div className="CheckOutForm">
        <form>
          <div className="PersonalInformationCheckOut">
            <p>Personal Information</p>
            <input type="text" placeholder="UserName" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Mobile Number" required />
          </div>

          <div className="AddressInformationCheckOut">
            <p>Address Information</p>
            <input type="text" placeholder="Address1" required />
            <input type="text" placeholder="Address2" />
          </div>

          <div>
            <input type="checkbox" required />
            Cash on delivery
          </div>
        </form>
      </div>

      <div className="CheckOutFormDiscount">
        <div className="CheckOutFormDiscountTitle">
          <h4>Your Order</h4>
        </div>

        <div className="SelectedServicesName">
          <p>Services Name :{SelectedServices.title} </p>
        </div>

        <div className="SelectedServicesPrice">
          <p>Services Price :{SelectedServices.price}</p>
        </div>

        <div className="SelectedServicesTotal">
          <p></p>
        </div>

        <div className="DiscountInput">
          <h4>Discount Code</h4>
          <input type="text" placeholder="Discount Code" onChange={(e)=>{handleDiscount(e)}} />
          <button type="submit" onClick={handleSubmite}>Discount</button>
          <p>The Price After Discount :{Total} </p>
          
        </div>
      </div>
    </div>
  );
}
