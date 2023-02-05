import * as React from 'react';
import { projects } from 'portfolio';
import { ThemeContext } from 'context/theme';
import uniqid from 'uniqid';
import classes from './projects.module.scss';
import ProjectContainer from './project-container';

const ProjectComponent:React.FC = () => {
  const { theme } = React.useContext(ThemeContext);

return (
  <div className={classes.projects_section} id="#projects">
    <h2 className={theme === 'dark' ? `${classes.dark_projects_section_title}` : `${classes.light_projects_section_title}`}>
      projects
    </h2>
    <div className={classes.projects_container}>
      {projects.map((project) => (
        <ProjectContainer
          key={uniqid()}
          description={project.description}
          livePreview={project.livePreview}
          name={project.name}
          sourceCode={project.sourceCode}
          stack={project.stack}
        />
  ))}
    </div>
  </div>
  );
      };
export default ProjectComponent;
