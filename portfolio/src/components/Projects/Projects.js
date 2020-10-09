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

    <div className="container">

      {/* <Particles
        className="particles"
        params={particulesOptions}
      /> */}

      <Decoration />

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

      </div>
    </div>
  );
}

export default Projects;
