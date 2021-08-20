import React from "react";
import "./Videosidebar.css";

export default function Videosidebar({ videos, niveau, setId }) {
  return (
    <div className="videosidebar">
      <div className="videoheadersidbar">
        <h3>Liste des cours :</h3>
      </div>

      <div className="videolevelsidbar">
        <h3>Niveau : {niveau}</h3>
      </div>

      <div className="videocourssidbar">
        <ul>
          {videos?.map((video, index) => {
            return (
              <li onClick={() => setId(video._id)}>
                {index + 1}- {video.titre}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
