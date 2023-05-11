import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [contactState, setContactState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = contactState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const checkValid = validateEmail(e.target.value);
      console.log(checkValid);
      // isValid conditional statement
      if (!checkValid) {
        setErrorMessage("Invalid email address, try again.");
      } else {
        setErrorMessage("");
      }
      // !isValid conditional statement
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setContactState({ ...contactState, [e.target.name]: e.target.value });
    }
  }


  function handleBlank(e) {
    if (e.target.name === "Name" || e.target.name === "Message") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setContactState({ ...contactState, [e.target.name]: e.target.value });
    }
  }

  return (
    <section>
      <div className="center">
        <h1 className="header">Contact Me</h1>
      </div>
      <div>
        <form id="contact">
          <div>
            <label htmlFor="name">Name:</label>
            <br></br>
            <input
              type="text"
              name="Name"
              defaultValue={name}
              onBlur={handleBlank}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br></br>
            <textarea
              name="Message"
              rows="6"
              defaultValue={message}
              onBlur={handleBlank}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Send</button>
          </form>
      </div>
    </section>
  );
}
