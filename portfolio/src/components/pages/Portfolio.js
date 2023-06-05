import React from "react";
import Project from "../pages/Project";

export default function Portfolio() {
  const projects = [
    {
      name: "Musical Chairs",
      description:
        "This is a full stack social media app designed to share your favorite songs with other users.",
      image: "Musical_Chairs_Logo.png",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Spotfiy API",
        "Bootstrap",
        "Google Fonts",
        "Node.js",
        "Handlebars.js",
        "Heroku & AWS S3",
        "MVC",
      ],
      github: "https://github.com/patrickmc19/Musical-Chairs",
      deployed: "https://musical-chairs.herokuapp.com/login",
    },
    {
    	name: 'Fit-n-Run',
    	description:
    		'A full stack exercise application design to help you quickly track your workouts and find workouts that target specific muscle groups.',
    	image: 'fitnesslogo.png',
    	technologies: [
        'HTML/CSS',
        'JavaScript',
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'Heroku',
        'API Ninjas Exercise API',
        'Google Fonts',
        'Bootstrap',
        'React-Bootstrap',
        'React-Router-Dom',
      ],
    	github: 'https://github.com/TheRealGeneParmesan/Fit-N-Run',
    	deployed: 'https://fit-n-run.herokuapp.com/',
    },
    {
      name: "Sherpa",
      description:
        "This is your personal travel app - check the weather of your destination, a map of the surrounding area with things to do, and keep track of your itinerary all in one place.",
      image: "sherpa.jpg",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Weather API",
        "Google Maps API",
        "Google Fonts",
        "jQuery",
        "Sass",
        "Local Storage",
        "Tailwind CSS",
      ],
      github: "https://github.com/patrickmc19/sherpa",
      deployed: "https://patrickmc19.github.io/sherpa/",
    },
    {
      name: "Work Day Scheduler",
      description:
        "A simple calendar application that allows a user to save events for each hour of the day from 9-5.",
      image: "work-day-scheduler.jpg",
      technologies: ["JavaScript", "Node.js", "Express"],
      github: "https://github.com/patrickmc19/module-5-challenge",
      deployed: "https://patrickmc19.github.io/module-5-challenge/",
    },
    {
      name: "Weather Dashboard",
      description:
        "A weather dashboard that shows current weather and five-day weather forecast for any city.",
      image: "weather-app.jpg",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "OpenWeather API",
      ],
      github: "https://github.com/patrickmc19/3rd-party-API-weather",
      deployed: "https://patrickmc19.github.io/3rd-party-API-weather/",
    },
    {
      name: "Password Generator",
      description:
        "This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.",
      image: "password-generator.jpg",
      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com/patrickmc19/module-3-challenge",
      deployed: "https://patrickmc19.github.io/module-3-challenge/",
    },
    {
      name: "Note Taker",
      description:
        "This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.",
      image: "note-taker.jpg",
      technologies: ["HTML/CSS", "JavaScript", "Express.js"],
      github: "https://github.com/patrickmc19/express.js-note-taker",
      deployed: "https://express-note-taker55.herokuapp.com/",
    },
  ];
  return (
    <section>
      <div className="center">
        <h2 className="page-header">My Portfolio</h2>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}
