import React from "react";

export default function About() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="header">About Me</h1>
      </div>
      <div className="center">
        <img src={require("../../assets/images/profile-img.jpg")} alt="picture of myself" className="profile-img"/>
      </div>
      <div>
      <p>
        I am a full-stack coding bootcamp student who aspires to become a full stack web developer. My current background is in supply chain, where I have 7 years of professional working experience. I also played collegiate sports and use my background in team sports to thrive in a group setting. I am a hard worker, a quick learner, and enjoy solving complex problems - I am excited to see where my coding journey takes me.
      </p>
      <p>
        In my bootcamp experience I have worked in group settings to create a full-stack application, and have also worked individually to create a full-stack applications. I have also worked individually to create many other useful applications. I have experience with HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express.js, MySQL, MongoDB, React, and more. I am excited to continue to learn and grow as a developer. Check out my portfolio tab to see some of my work!
      </p>
      </div>
    </section>
  );
}
