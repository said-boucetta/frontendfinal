import { useState, useEffect } from "react";
import Videotopbar from "./components/videotopbar/Videotopbar";
import Videoother from "./components/videoothers/Videoother";
import Videosidebar from "./components/videosidebar/Videosidebar";
import axios from "axios";
import "./Video.css";

function Video() {
  const [videos, setVideos] = useState([]);
  const [niveau, setNiveau] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get("http://localhost:5000/api/video");
      setVideos(response?.data);
      setId(response?.data[0]?._id);
    };
    getVideos();
  }, []);
  useEffect(() => {
    setSelectedVideo(videos.find((video) => video._id == id));
  }, [id]);
  return (
    <div>
      <Videotopbar />
      <div className="videocontainer">
        <Videosidebar videos={videos} niveau={niveau} setId={setId} />
        <Videoother setNiveau={setNiveau} selectedVideo={selectedVideo} />
      </div>
    </div>
  );
}

export default Video;
