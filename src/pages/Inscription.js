import React, { useState } from "react";
import "./Inscription.css";
import phLogin from "../pages/loginimg.png";
import axios from "axios";
import SignUpForm from "./SignUpForm";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inscription = () => {
  const [fliping, setFliping] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );
      console.log(response);
      if (response) {
        toast.success("Vous etes connecté");
        if (response.data?.user?.role == "admin") {
          history.push("/admin");
        } else {
          history.push("/video");
        }
      }
    } catch (error) {
      toast.error("Erreur lors de la connexion");
    }
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
              <input
                className="input-bo "
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <label htmlFor="password">Mot de passe</label>
              <br />
              <input
                className="input-bo "
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                id="sub"
                className="submit-btn"
                type="submit"
                value="Se connecter"
              />
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
            <SignUpForm />
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
export default Inscription;
