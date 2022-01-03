import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Register.css";

export default function NewPath() {
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/LoginPage");
  };
  return <Register handelNavigate={handelNavigate} />;
}

function Register(props) {
  const [UserName, setUserName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Rpassword, setRpassword] = useState();
  const [MessageUserName, setMessageUserName] = useState("");
  const [MessageEmail, setMessageEmail] = useState("");
  const [MessagePassword, setMessagePassword] = useState("");
  const [MessageRpassword, setMessageRpassword] = useState("");
  let CounterError;

  const handelSubmit = (e) => {
    e.preventDefault();
    CounterError = 0;
    if (UserName === "") {
      setMessageUserName("Please enter your name");
      CounterError++;
    } else {
      setMessageUserName("");
    }

    if (Password.length < 6 || Password === "") {
      setMessagePassword("The password shoud be more than 5");
      CounterError++;
    } else {
      setMessagePassword("");
    }

    if (Password !== Rpassword) {
      setMessageRpassword("The password is not matched");
      CounterError++;
    } else {
      setMessageRpassword("");
    }

    if (!Email.includes("@") || Email === "") {
      setMessageEmail("The email is not valid");
      CounterError++;
    } else {
      setMessageEmail("");
    }

    for (let i = 0; i < localStorage.length; i++) {
      const emailUsed = JSON.parse(localStorage.getItem(localStorage.key(i)));

      if (emailUsed.Email === Email) {
        setMessageEmail("Email is already in use");
        CounterError++;
      }
    }

    if (CounterError === 0) {
      let User = {
        UserName: UserName,
        Email: Email,
        Password: Password,
        Rpassword: Rpassword,
      };

      localStorage.setItem(Email, JSON.stringify(User));
      swal({
        title: "Completed!",
        text: "You have successfully completed the registration process",
        buttons: "ok",
      });

      setTimeout(() => {
        props.handelNavigate();
      }, 2000);
    }
    
  };

  return (
    <div className="Register">
      <div className="RegisterTitle">
        <h2>Create Account</h2>
      </div>

      <div className="RegisterForm">
        <form>
          <input
            type="text"
            value={UserName}
            placeholder="UserName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
          <p> {MessageUserName}</p>
          <input
            type="email"
            value={Email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <p>{MessageEmail}</p>
          <input
            type="password"
            value={Password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <p> {MessagePassword}</p>
          <input
            type="password"
            value={Rpassword}
            placeholder="Repeat Password"
            onChange={(e) => {
              setRpassword(e.target.value);
            }}
            required
          />
          <p> {MessageRpassword}</p>
          <button type="submit" onClick={handelSubmit}>
            Register
          </button>
        </form>
      </div>
      <span>
        You have already account ?{" "}
        <strong>
          <Link to={"/LoginPage"}>Login</Link>{" "}
        </strong>{" "}
      </span>
    </div>
  );
}
