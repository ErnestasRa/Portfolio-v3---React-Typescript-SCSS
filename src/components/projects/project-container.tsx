import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeContext } from 'context/theme';
import uniqid from 'uniqid';
import classes from './projects.module.scss';

type ProjectContainerType = {
    name: string,
    description: string,
    stack: string[],
    sourceCode: string,
    livePreview: string,
};

const ProjectContainer:React.FC<ProjectContainerType> = ({
    name,
    description,
    stack,
    sourceCode,
    livePreview,
}) => {
  const { theme } = React.useContext(ThemeContext);
return (
  <div className={theme === 'dark' ? `${classes.dark_single_project}` : `${classes.light_single_project}`}>
    <h3>{name}</h3>
    <p>{description}</p>
    <ul className={theme === 'dark' ? `${classes.dark_stack_container}` : `${classes.light_stack_container}`}>
      {stack.map((data) => <li key={uniqid()}>{data}</li>)}
    </ul>
    <ul className={theme === 'dark' ? `${classes.dark_project_icons}` : `${classes.light_project_icons}`}>
      <a href={sourceCode}>
        <GitHubIcon />
      </a>
      <a href={livePreview}>
        <OpenInNewIcon />
      </a>
    </ul>
  </div>
  );
};

export default ProjectContainer;
