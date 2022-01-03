import React, { useState } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function NewPath() {
  const UserLogin=JSON.parse(localStorage.getItem('UserLogin'))
  const TimeSelected=JSON.parse(localStorage.getItem('TimeSelected'))
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/");

    if(TimeSelected){
      navigate("/ProfilePage");
    }
  };

  return <Login handelNavigate={handelNavigate} />;
}

function Login(props) {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [MessageError, setMessageError] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    for (let i = 0; i < localStorage.length; i++) {
      const EmaillocalStorage = JSON.parse(
        localStorage.getItem(localStorage.key(i))
      );
      console.log(EmaillocalStorage);
      if (
        Email === EmaillocalStorage.Email &&
        Password === EmaillocalStorage.Password
      ) {
        swal({
          title: "Completed!",
          text: "logged in",
          buttons: "ok",
        });
        localStorage.setItem("UserLogin", JSON.stringify(EmaillocalStorage));

        setTimeout(()=>{
            props.handelNavigate();
        })
     
        break;
      } else {
        setMessageError("The username or password incorrect");
      }
    }
  };

  return (
    <div className="Login">
      <div className="LoginTitle">
        <h2>Sign In</h2>
      </div>

      <div className="Loginform">
        <form>
          <input
            type="email"
            value={Email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            value={Password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="submit" onClick={handelSubmit}>
            Login
          </button>
        </form>
      </div>
      <p>{MessageError}</p>
      <span>
        You Don't Have An Account ?{" "}
        <strong>
          <Link to={"/RegisterPage"}>Register </Link>{" "}
        </strong>
      </span>
    </div>
  );
}
