import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    //     <div className="contact" id="contact">
    //       <div className="left">
    //         <img src="assets/shake.svg" alt="" />
    //       </div>
    //       <div className="right">
    //         <h2>Contact.</h2>
    //         <form onSubmit={handleSubmit}>
    //           <input type="text" placeholder="Email" />
    //           <textarea placeholder="Message"></textarea>
    //           <button type="submit">Send</button>
    //           {message && <span>Thanks, I'll reply ASAP :)</span>}
    //         </form>
    //       </div>
    //     </div>
    //   );
    // }
    <form onSubmit={handleSubmit} className="contact">
      <div className="name">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className="input">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div className="message">
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
}
