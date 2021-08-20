import { Link } from "react-router-dom";
import "./Videotopbar.css";

export default function Videotopbar() {
  return (
    <div className="videotopbar">
      <div className="videotopbarWrapper">
        <div className="videotopLeft">
          <span className="videologo">EyeTech</span>
        </div>

        <div className="videologoutContainer">
          <Link to="/" className="link">
            <h3>Déconnecter</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
