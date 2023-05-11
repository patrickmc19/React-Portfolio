import React, { useState } from "react";
import Card from "react-bootstrap/Card";

// inspiration for this code came from https://github.com/OwaisIslam/react-portfolio/
function Project(props) {
  // import the information from the project being referenced
  const Project = useState(props)[0].projects;

  const name = Project.name;
  const description = Project.description;
  const image = Project.image;
  const tools = Project.tools;
  const github = Project.github;
  const deployed = Project.deployed;

  // this function parses the array and returns a list of tool
  function parseTools(toolsArray) {
    let toolsList = "";
    for (let i = 0; i < toolsArray.length; i++) {
      if (i === toolsArray.length - 1) {
        toolsList += toolsArray[i];
      } else {
        toolsList += toolsArray[i] + ", ";
      }
    }
    return toolsList;
  }

// this function returns the card with the information from the project
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={require(`../../assets/images/${image}`)}
        className="card-image"
      />
      <div className="center">
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-text">{description}</Card.Text>
          <Card.Text className="card-text">
            Tools: {parseTools(tools)}
          </Card.Text>
          <Card.Link href={github} target="_blank" className="card-link">
            {name} Github
          </Card.Link>
          <Card.Link href={deployed} target="_blank" className="card-link">
            {name} Deployed
          </Card.Link>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Project;