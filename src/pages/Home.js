import React, { useState } from "react";
import "./Home.css";
import VideoPlayer from "react-video-js-player";
import repair from "../pages/videoHome.mp4";
import photoDebutants from "../pages/debutants.jpg";
import photoPro from "../pages/pro.jpg";
import photoSoft from "../pages/nand.jpg";
import phLogin from "../pages/loginimg.png";
import Inscription from "./Inscription";
import SignUpForm from "./SignUpForm";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const [fliping, setFliping] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/message", {
        pseudo: name,
        email,
        message,
      });
      if (response) {
        toast.success("Message envoyé");
      }
    } catch (error) {
      toast.error("Error lors de l'envoie du message");
    }
  };

  const showHandlder = () => {
    setShow(true);
  };

  const hideHandler = () => {
    setShow(false);
  };

  const flipHandlder = () => {
    setShow(true);
  };

  const turnHandler = () => {
    setShow(false);
  };
  const videoSrc = repair;

  return (
    <div className="containerHome">
      <div className="texteHome">
        <h1>Devenez un Pro technicien en réparation Smartphones</h1>
        <p>
          Vous voulez vous former à la réparation de smartphones! Vous êtes
          débutants ou réparateurs et vous voulez améliorer vos connaissances en
          réparation de smartphones,nous vous proposons une formation 100% en
          ligne en réparation de téléphones mobiles.
        </p>
      </div>

      <div onClick={showHandlder} className="videoHome">
        <i class="far fa-play-circle" />
      </div>

      {show ? (
        <div className="videoAcceuil">
          {" "}
          <VideoPlayer src={videoSrc} width="700" height="400" />
          <i
            id="exitt"
            onClick={hideHandler}
            className="quitter"
            class="fas fa-times-circle"
          />
        </div>
      ) : null}

      {/* Troisieme page////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="containerContact">
        <div className="contactHeader">
          <h1>Contactez nous</h1>
          <p>
            Vous avez des questions ? n'esitez pas a les posez, Nous vous
            répondons au prochains délais.
          </p>
        </div>

        <div className="contactBody">
          <div className="contacInfo">
            <div className="box">
              <div className="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div className="text">
                <h3>Adresse</h3>
                <p>Bd.Mahdjoub Boualem N°156-Blida</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div className="text">
                <h3>E-mail</h3>
                <p>said190295@gmail.com</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h3>Téléphone</h3>
                <p>+213 558 320 883</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fab fa-facebook"></i>
              </div>
              <div className="text">
                <h3>Facebook</h3>
                <p>الخبير للهواتف النقالة</p>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <h2>Envoyer un message</h2>

              <div className="inputBox+">
                <input
                  className="innerContact"
                  type="text"
                  name=""
                  required="required"
                  placeholder="Nom et Prénom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="inputBox+">
                <input
                  className="innerContact"
                  type="text"
                  name=""
                  required="required"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="inputBox+">
                <textarea
                  className="innerContact"
                  required="required"
                  placeholder="Taper votre message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="inputBox+">
                <input className="send" type="submit" name="" value="send" />
              </div>
            </form>
          </div>
        </div>

        {/* Deuxieme Page/////////////////////////////////////////////////////////////////////////////////////////////////////////  */}

        <div className="secondPage">
          <div className="titleSecond">
            <h1>Programme de la formation:</h1>
          </div>

          <div className="containerCard">
            <div className="card">
              <div className="img">
                <img src={photoDebutants} />{" "}
              </div>
              <div className="top-text">
                <div className="name">Niveau 1</div>
                <p>Réparation mobile pour débutants</p>
              </div>
              <div className="bottom-text">
                <div className="text">
                  Cette formation est destinée pour les gens qui ont aucune
                  connaissances dans le domaine de la réparation des
                  smartphones.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={photoPro} />
              </div>
              <div className="top-text">
                <div className="name">Niveau 2</div>
                <p>Réparation de l'Iphone et détection des pannes</p>
              </div>
              <div className="bottom-text">
                <div className="text">
                  Une formation complète dans le Hardware, spécialisé dans la
                  microsoudure et la détection des pannes complexes de l'Iphone
                  d'une manière scientifique et profetionelle.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={photoSoft} />
              </div>
              <div className="top-text">
                <div className="name">Software</div>
                <p>Nand programming et Icloud</p>
              </div>
              <div className="bottom-text">
                <div className="text">
                  Cette formation est pour apprendre a manipuler le matériel de
                  la programmation avec "Nand Programmin", et les techniques de
                  l'Icloud.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quatriemme Page //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="container4">
          <Inscription />
        </div>
        {/* 
        <div className="container4">
          <div className="phconnexion">
            <img className="logimg" src={phLogin} />
          </div>
          <div className="card4">
            <div className={`inner-box ${fliping ? "" : "visible"}`} id="card">
              <div className="card-front">
                <h2>Connexion</h2>
                <form>
                  <input
                    type="email"
                    className="input-box"
                    placeholder="E-mail"
                    required
                  />
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Mot de passe"
                    required
                  />
                  <button type="submit" className="submit-btn">
                    Valider
                  </button>
                  <input type="checkbox" /> <span>Remember me</span>
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
                <a href="">Mot de passe oublié!</a>
              </div>

              <div className="card-back">
                <h2>Inscription</h2>
                <form>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Nom et Prénom"
                    required
                  />
                  <input
                    type="email"
                    className="input-box"
                    placeholder="E-mail"
                    required
                  />
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Mot de passe"
                    required
                  />
                  <button type="submit" className="submit-btn">
                    Valider
                  </button>
                  <input type="checkbox" /> <span>Remember me</span>
                </form>
                <button
                  type="button"
                  className="btn"
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
        </div> */}
      </div>
    </div>
  );
};

export default Home;
