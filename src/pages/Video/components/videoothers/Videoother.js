import { useState, useEffect } from "react";
import "./Videoother.css";
import { Link, useRouteMatch } from "react-router-dom";
import ReactPlayer from "react-player";
export default function Videoother({ setNiveau, selectedVideo }) {
  let { url } = useRouteMatch();
  return (
    <div className="videoothers">
      <div className="videolevels">
        <div className="videolevel1">
          <h1 onClick={() => setNiveau(1)}>Niveau 1</h1>{" "}
        </div>

        <div className="videolevel2">
          <h1 onClick={() => setNiveau(2)}>Niveau 2</h1>{" "}
        </div>

        <div className="videolevel3">
          <h1 onClick={() => setNiveau(3)}>Niveau 3</h1>
        </div>
      </div>

      <div className="videotitlevideo">
        <h2>Titre Video :{selectedVideo?.titre} </h2>
      </div>
<div className="videocontainervideo">
      <div  style={{ width: "900", height: "500", position:"absolute", left:"300px", top: "100px"}}>
        <ReactPlayer url={selectedVideo?.url} />
      </div>
      </div>
    </div>
  );
}
