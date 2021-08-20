import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <>
        <nav>
          <div className="logoo">
            <h2>EyeTech</h2>
            <i class="fas fa-eye"></i>
          </div>

          <ul className={toggle ? "active" : ""}>
            <li>
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <Link to="/courses">Cours</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li id="login">
              <Link to="/inscription">Connexion / Inscription</Link>
            </li>
          </ul>
          <div onClick={toggleHandler} className="toggle-btn">
            <i class="fas fa-bars"></i>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
