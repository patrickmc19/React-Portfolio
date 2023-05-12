import React from 'react';

export default function Resume() {
  return (
    <section>
      <div className="center">
        <h2>My Resume</h2>
      </div>
      <div className="bottom-spacing">
        <a href={require("../../assets/files/Patrick McKnight Resume.pdf")} download>
          Click here to download my resume.
        </a>
        <br></br>
      </div>
      <div>
        <h3>Front-end Proficiencies</h3>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Handlebars</li>
          <li>Responsive Design</li>
        </ol>
        <br></br>
        <h3>Back-end Proficiencies</h3>
        <ol>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL & Sequelize</li>
          <li>MongoDB & Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ol>
        <br></br>
        <h3>Dev Tools</h3>
        <ol>
          <li>Git</li>
          <li>npm</li>
          <li>Jest</li>
          <li>Webpack</li>
          <li>Chrome DevTools</li>
        </ol>
        <br></br>
        <h4>...and much more to come!</h4>
      </div>
    </section>
  );
}
