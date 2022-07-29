import { useEffect, useState } from "react";
import "../styles/loadings.css";

const Loader = () => {
  const [num, setNum] = useState(6);

  useEffect(() => {
    setNum(Math.floor(Math.random() * 10 * 0.6));
  }, []);

  if (num === 6) {
    return <div></div>;
  } else if (num === 0) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (num === 1) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <span className="load1"></span>
      </div>
    );
  } else if (num === 2) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <span className="load2"></span>
      </div>
    );
  } else if (num === 3) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <span className="load3">Loading</span>
      </div>
    );
  } else if (num === 4) {
    return (
      <div className="">
        <span className="load4"></span>
      </div>
    );
  } else if (num === 5) {
    return (
      <div className="position-relative load5-style">
        <div className="position-absolute top-50 start-50 translate-middle mt-5">
          <span className="load5"></span>
        </div>
      </div>
    );
  }
};

export default Loader;
