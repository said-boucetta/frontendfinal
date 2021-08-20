import React from 'react'
import '../pages/Courses.css'
import photoDebutants from "../pages/debutants.jpg";
import photoPro from "../pages/pro.jpg";
import photoSoft from "../pages/nand.jpg";

const Courses = () => {
    return (
        <div className="secondPage">
          <div className="titleSecon">
            <h1>Programme de la formation:</h1>
          </div>

          <div className="containerCard">
            <div className="card">
              <div className="img">
                <img src={photoDebutants} />
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
                  microsoudure et la détection des pannes d'une manière
                  scientifique des pannes complexes de l'Iphone.
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

    )
}

export default Courses
