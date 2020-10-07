import React from 'react';
import Card from './Card/Card';
import './Projects.css';


function Projects({ projects }) {
  return (
    <div className="projects">
      {projects.length > 0 ? projects[0].map((project, i) => {
        console.log(project)
        return <Card
          key={i}
          title={project.title}
          url={project.url}
          description={project.description}
          lifeWeb={project.lifeWeb}
        />
      }) :
        null
      }
    </div>
  );
}

export default Projects;
