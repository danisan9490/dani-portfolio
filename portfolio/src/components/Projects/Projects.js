import React from 'react';
import Card from './Card/Card';
import './Projects.css';
// import Particles from 'react-particles-js';

// const particulesOptions = {
//   particles: {
//     number: {
//       value: 50,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// }

function Projects({ projects }) {
  return (

    <div className="container">
      <div className="decoration">
        {/* <i class="fa fa-volume-up"></i> */}
        {/* <i class="fa fa-home"></i> */}
        <i class="fas fa-briefcase"></i>
        <i class="fas fa-laptop-code"></i>
        <i class="fa fa-desktop"></i>
        <i class="fas fa-mouse"></i>
        <i class="fa fa-coffee"></i>
        <i class="far fa-calendar-alt"></i>

      </div>
      <div className="categories">
        <button className="button" >Full Stack</button>
        <button className="button" >Html/Css/JS</button>
        <button className="button" >Python</button>
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
        {/* <Particles
        className="particles"
        params={particulesOptions}
      /> */}
      </div>
    </div>
  );
}

export default Projects;
