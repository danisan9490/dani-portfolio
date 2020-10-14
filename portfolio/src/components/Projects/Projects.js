import React from 'react';
import Card from './Card/Card';
import Decoration from './Decoration/Decoration';
import './Projects.css';
// import Particles from 'react-particles-js';

// const particulesOptions = {
//   particles: {
//     number: {
//       value: 30,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// }

function Projects({ projects }) {
  return (

    <div className="container" id="projects">

      {/* <Particles
        className="particles"
        params={particulesOptions}
      /> */}


      <div className="blueContainer">
        <Decoration />
        <div className="headerProjects">
          <h1>My Recent Work</h1>
          <br />
          <h2>Here are a few projects I've worked on recently.</h2>
        </div>
      </div>

      <div className="projects">
        {projects.length > 0 ? projects[0].map((project, i) => {
          return <Card
            key={i}
            title={project.title}
            url={project.url}
            description={project.description}
            lifeWeb={project.lifeWeb}
            img={project.img}
            category={project.category}
          />
        }) :
          null
        }

      </div>
    </div>
  );
}

export default Projects;
