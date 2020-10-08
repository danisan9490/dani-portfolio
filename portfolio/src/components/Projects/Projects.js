import React from 'react';
import Card from './Card/Card';
import './Projects.css';


function Projects({ projects }) {
  return (
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
  );
}

export default Projects;
