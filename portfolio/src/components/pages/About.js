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
        To do: write about myself, skills, and approach.
      </p>
      <p>
        To do: describe musical chairs and other relevant coding experiences in the bootcamp.
      </p>
      </div>
    </section>
  );
}
