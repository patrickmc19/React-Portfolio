import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/patrickmc19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/logos/github-logo.png")}
            alt="GitHub Logo"
            className="logo"
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/patrick-mcknight-77120698/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/logos/linkedin-logo.png")}
            alt="LinkedIn Logo"
            className="logo"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
