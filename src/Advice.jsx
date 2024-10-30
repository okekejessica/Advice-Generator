import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import divider from "../src/assets/pattern-divider-desktop.svg";
import dice from "../src/assets/icon-dice.svg";
import { ClipLoader } from "react-spinners";

const Advice = ({ advice, getAdvice, loading }) => {
  return (
    <div className="main">
      {loading ? (
        <div className="spinner">
          <ClipLoader color="#36d7b7" loading={loading} size={50} />
        </div>
      ) : (
        <>
          <h1 className="title mb-0">ADVICE #{advice.id}</h1>
          <p className="mb-2 advice">"{advice.advice}"</p>
          <img className="desk-img " src={divider} alt="" />

          <button onClick={getAdvice}>
            <div className="dice ">
              <img id="advice-button" src={dice} alt="" />
            </div>
          </button>
        </>
      )}
    </div>
  );
};

export default Advice;
