import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [NavbarListMenu, setNavbarListMenu] = useState("ulListMenu");
  const [NumberOfClickMenu, setNumberOfClickMenu] = useState(1);
  const navigate = useNavigate();

  const UserLogin = localStorage.getItem("UserLogin");
  const handelClickMenu = () => {
    if (NumberOfClickMenu === 1) {
      setNavbarListMenu("NavbarListMenu");
      setNumberOfClickMenu(2);
    }

    if (NumberOfClickMenu === 2) {
      setNavbarListMenu("ulListMenu");
      setNumberOfClickMenu(1);
    }
  };

  const handelLogOut = () => {
    localStorage.removeItem("UserLogin");
    navigate("/LoginPage");
  };

  return (
    <div className="Navbar">
      <div className="NavbarImg">
        <h1>Events</h1>
      </div>

      {UserLogin ? (
        <div className="NavbarList">
          <ul className="ulList">
            <li className="NavbarListLi"> <Link to={"/"}>Home</Link>  </li>
            <li className="NavbarListLi"><Link to={'/ServicesPage'}> Services</Link></li>
            <li className="NavbarListLi">About Us</li>
            <li className="NavbarListLi"><Link to={'/ProfilePage'}> Profile</Link></li>
            <li className="NavbarListLi">
              <Link to={"/LoginPage"}>
                <button onClick={handelLogOut}>LogOut</button>
              </Link>
            </li>

            <li className="Menu">
              <i className="fas fa-bars" onClick={handelClickMenu}></i>

              <ul className={NavbarListMenu}>
                <div>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li><Link to={'/ServicesPage'}> Services</Link></li>
                  <li>About Us</li>
                  <li><Link to={'/ProfilePage'}> Profile</Link></li>
                  <li>
                    <button onClick={handelLogOut}>LogOut</button>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      ) : (
        <div className="NavbarList">
          <ul className="ulList">
            <li className="NavbarListLi">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="NavbarListLi"><Link to={'/ServicesPage'}> Services</Link></li>
            <li className="NavbarListLi">About Us</li>
            <li className="NavbarListLi">
              <Link to={"/LoginPage"}>
                <button>Login</button>
              </Link>
            </li>

            <li className="Menu">
              <i className="fas fa-bars" onClick={handelClickMenu}></i>

              <ul className={NavbarListMenu}>
                <div>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li><Link to={'/ServicesPage'}> Services</Link></li>
                  <li>About Us</li>
                  <li>
                    <Link to={"/LoginPage"}>
                      <button>Login</button>
                    </Link>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
