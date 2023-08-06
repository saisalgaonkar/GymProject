import "./Join.css";

import React, { useRef } from "react";
import emailJs from "@emailjs/browser";

export default function Join() {
  const form = useRef();
  // sending email fucntion
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(refForm.current)
    emailJs
      .sendForm(
        "service_7po0lcm",
        "template_qfvccqk",
        form.current,
        "Jh-soJD5g-mLXlNU7"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          // console.log(error)
          alert("Failed to send the message, please try again.");
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input
            type="email"
            name="name"
            placeholder="Enter your Email address"
            id=""
            required
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}
