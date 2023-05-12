import React from "react";
import Project from "../Project";

export default function Portfolio() {
  const projects = [
		{
			name: 'Musical Chairs',
			description:
				'This is a full stack social media app designed to share your favorite songs with other users.',
			image: 'Musical_Chairs_Image.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
        'Spotfiy API',
        'Bootstrap',
        'Google Fonts',
				'Node.js',
        'Handlebars.js',
				'Heroku & AWS S3',
				'MVC',
			],
			github: 'https://github.com/patrickmc19/Musical-Chairs',
			deployed: 'https://musical-chairs.herokuapp.com/login',
		},
		{
			name: 'Sherpa',
			description:
				'This is your personal travel app - check the weather of your destination, a map of the surrounding area with things to do, and keep track of your itinerary all in one place.',
			image: 'sherpa.jpg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Weather API',
        'Google Maps API',
        'Google Fonts',
        'jQuery',
        'Sass',
        'Local Storage',
        'Tailwind CSS',
      ],
			github: 'https://github.com/patrickmc19/sherpa',
			deployed: 'https://patrickmc19.github.io/sherpa/',
		},
		{
			name: 'Tech Blog',
			description:
				'A full stack social media app for those passionate about all things tech.',
			image: '',
			technologies: [
        'HTML/CSS', 
        'JavaScript', 
        'Node.js',
        'Express.js',
        'MySQL',
        'Sequelize',
        'Handlebars.js',
        'Heroku',
      ],
			github: 'https://github.com/patrickmc19/MVC_Tech_Blog',
			deployed: '',
		},
		{
			name: 'Work Day Scheduler',
			description:
				'',
			image: '',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: '',
			deployed: '',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/patrickmc19/3rd-party-API-weather',
			deployed: 'https://patrickmc19.github.io/3rd-party-API-weather/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/patrickmc19/module-3-challenge',
			deployed: 'https://patrickmc19.github.io/module-3-challenge/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: '',
			technologies: [
        'HTML/CSS', 
        'JavaScript', 
        'Express.js'
      ],
			github: 'https://github.com/patrickmc19/express.js-note-taker',
			deployed: 'https://express-note-taker54.herokuapp.com/',
		},
	];
  return (
    <section>
      <div>
        <h1>My Portfolio</h1>
      </div>
    </section>
  );
}
