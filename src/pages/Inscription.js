import React, { useState } from "react";
import "./Inscription.css";
import phLogin from "../pages/loginimg.png";
import axios from "axios";
import SignUpForm from "./SignUpForm";

const Inscription = () => {
  const [fliping, setFliping] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
    

  return (
    <div className="container5">
      <div className="phLogin">
        <img className="logimg" src={phLogin} />
      </div>
      <div className="card5">
        <div className={`inner-box ${fliping ? "" : "visible"}`} id="card">
          <div className="card-front">
            <h2>Connexion</h2>
            <form action="" onSubmit={handleLogin} id="sign-up-form">
              <label htmlFor="email">Email</label>
              <br />
              <input className="input-bo "
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <label htmlFor="password">Mot de passe</label>
              <br />
              <input className="input-bo "
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input id="sub" className="submit-btn" type="submit" value="Se connecter" />
            
            </form>
            <button
              type="button"
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                setFliping(!fliping);
              }}
            >
              Je m'inscris
            </button>
          
          </div>

          <div className="card-back">
            <h2>Inscription</h2>
<SignUpForm/>
            <button 
              type="button"
              className="deja"
              onClick={(e) => {
                e.stopPropagation();
                setFliping(!fliping);
              }}
            >
              J'ai déja un compte
            </button>
          </div>
        </div>
      </div>
    </div>
    //   <div className="container5">
    //   <div className="phLogin">
    //     <img className="logimg" src={phLogin}/>
    //   </div>
    //   <div className="card5">
    //     <div className={`inner-box ${fliping ? "" : "visible"}`} id="card">
    //       <div className="card-front">
    //         <h2>Connexion</h2>
    //         <form>
    //           <input
    //             type="email"
    //             className="input-box"
    //             placeholder="E-mail"
    //             required
    //           />
    //           <input
    //             type="password"
    //             className="input-box"
    //             placeholder="Mot de passe"
    //             required
    //           />
    //           <button type="submit" className="submit-btn">
    //             Valider
    //           </button>
    //           <input type="checkbox" /> <span>Remember me</span>
    //         </form>
    //         <button
    //           type="button"
    //           className="btn"
    //           onClick={(e) => {
    //             e.stopPropagation();
    //             setFliping(!fliping);
    //           }}
    //         >
    //           Je m'inscris
    //         </button>
    //         <a href="">Mot de passe oublié!</a>
    //       </div>

    //       <div className="card-back">
    //         <h2>Inscription</h2>
    //         <form>
    //           <input
    //             type="text"
    //             className="input-box"
    //             placeholder="Nom et Prénom"
    //             required
    //           />
    //           <input
    //             type="email"
    //             className="input-box"
    //             placeholder="E-mail"
    //             required
    //           />
    //           <input
    //             type="password"
    //             className="input-box"
    //             placeholder="Mot de passe"
    //             required
    //           />
    //           <button type="submit" className="submit-btn">
    //             Valider
    //           </button>
    //           <input type="checkbox" /> <span>Remember me</span>
    //         </form>
    //         <button
    //           type="button"
    //           className="btn"
    //           onClick={(e) => {
    //             e.stopPropagation();
    //             setFliping(!fliping);
    //           }}
    //         >
    //           J'ai déja un compte
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
const rootElement = document.getElementById("root");
export default Inscription;
