import React, { useState } from "react";
import axios from "axios";
import "./signUpForm.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const [terms, setTerms] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== controlPassword || !terms) {
      if (password !== controlPassword)
        toast.error("Les mots de passe ne correspondent pas");

      if (!terms) toast.error("Veuillez valider les conditions générales");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/register",
          {
            pseudo,
            email,
            password,
          }
        );
        if (response) {
          toast.success("Inscription reussie");
        }
      } catch (error) {
        toast.error("Erreur lors de l'inscription");
      }
    }
  };

  return (
    <>
      <form action="" onSubmit={handleRegister} id="sign-up-form">
        <label htmlFor="pseudo">Pseudo</label>
        <br />
        <input
          className="input-box "
          type="text"
          name="pseudo"
          id="pseudo"
          onChange={(e) => setPseudo(e.target.value)}
          value={pseudo}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="input-box"
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
          className="input-box "
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <label htmlFor="password-conf">Confirmer mot de passe</label>
        <br />
        <input
          className="input-box "
          type="password"
          name="password"
          id="password-conf"
          onChange={(e) => setControlPassword(e.target.value)}
          value={controlPassword}
        />

        <br />
        <label className="accepte" htmlFor="terms">
          <input
            className="checkbox"
            type="checkbox"
            id="terms"
            checked={terms}
            onChange={(e) => {
              setTerms(e.target.checked);
              console.log(e.target.checked);
            }}
          />
          <div>
            <a
              className="hreff"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              J'accepte les conditions générales
            </a>
          </div>
        </label>
        <div className="terms error"></div>
        <br />
        <input id="sub" type="submit" value="Valider inscription" />
      </form>
    </>
  );
};

export default SignUpForm;
