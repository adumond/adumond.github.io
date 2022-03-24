import "./about.scss";
import Compstock from "../../../img/compstock.png";
import DuffyandI from "../../../img/Duffy-and-I.webp";

export default function About() {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"> </div>
        <div className="a-card"></div>
        <div className="a-card">
          <img
            src={DuffyandI}
            alt="Duffy and Andrew DuMond Portrait"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Analytical and creative are two of many ways I would describe myself.
          I have explored various career paths including finance, web
          development, retail, hospitality, public relations, and a multitude of
          entrepreneurial ventures.
        </p>
        <p className="a-desc">
          I created this website using node.js and React with the intention of
          managing my own brand and reputation.
        </p>
        <div className="a-Compstock">
          <img src={Compstock} alt="" className="a-Compstock-img" />
          <div className="a-Compstock-texts">
            <h4 className="a-Compstock-title">CompStock</h4>
            <p className="a-Compstock-desc">
              My first project was a stock comparison application that utilized
              the browsers local storage to allow a user to compare stock data
              from one api call using multiple api endpoints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
