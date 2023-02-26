import "./App.css";
import videoTag from "./video/hexagon.mp4";
import imgtag from "./video/laptop.png";
function App() {
  return (
    <div className="container">
      <div className="videocontainer">
        <video src={videoTag} autoPlay loop muted className="video" />
      </div>
      <div className="laptopicon">
        <div className="imgtag">
          <a
            className="linkimg"
            href="https://cute-selkie-233853.netlify.app/#about-me"
          >
            <img src={imgtag} alt="laptop" />
          </a>
        </div>
          <p className="tagtext">Personal Web</p>
      </div>
    </div>
  );
}

export default App;
