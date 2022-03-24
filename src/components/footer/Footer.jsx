import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import "./footer.scss";

export default function Footer() {
  return (
    <div className={"footer "}>
      <div className="wrapper">
        <a href="https://github.com/adumond">
          <img src={github} alt="GitHub Icon" className="img" />
        </a>
        <a href="https://www.linkedin.com/in/andrew-dumond/">
          <img src={linkedin} alt="Linkedin Icon" className="img" />
        </a>
      </div>
    </div>
  );
}
