import "./home.scss";
import Me from "../../../img/myself.webp";

function Home() {
  return (
    <div className="i" id="home">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2>Welcome to my website!</h2>
          <h1>I'm Andrew DuMond!</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Accountant</div>
              <div className="i-title-item">Investor</div>
              <div className="i-title-item">Student</div>
            </div>
          </div>
          <div className="i-description">
            <p>
              {" "}
              I am a self-taught digital designer and web developer with a
              degree in Accounting. After acquiring a diverse professional
              background in various industries, I strive to understand the most
              impactful psychological, environmental, social, cultural, and
              personal factors that attract consumers to specific products and
              services.
            </p>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Andrew DuMond Portrait" className="i-img" />
      </div>
    </div>
  );
}

export default Home;
