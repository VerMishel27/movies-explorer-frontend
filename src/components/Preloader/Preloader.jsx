import "./Preloader.css";

function Preloader({preloader}) {
  return (
    <div className={`preloader ${preloader ? "preloader_active" : ""}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
}

export default Preloader;
