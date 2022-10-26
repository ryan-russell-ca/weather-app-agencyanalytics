import "./Loader.less";
import rings from "../icons/rings.svg";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={rings} alt="Loading" className="loader-icon" />
    </div>
  );
};

export default Loader;
