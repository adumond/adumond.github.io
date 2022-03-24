import "./resume.scss";

export default function Resume() {
  return (
    <>
      <div id="resumePDF">
        <iframe
          title="resume"
          id="pdf"
          src="https://drive.google.com/file/d/1vJWfeZxG5nNpnX7Vb1yXgUXLSlBeaWOF/preview"
          width="640"
          height="700"
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
}
