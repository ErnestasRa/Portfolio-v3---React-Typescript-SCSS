import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from 'portfolio';
import { ThemeContext } from 'context/theme';
import classes from './about.module.scss';

const AboutComponent:React.FC = () => {
const { theme } = React.useContext<ContextType>(ThemeContext);

return (
  <div className={theme === 'dark' ? `${classes.dark_about_container}` : `${classes.light_about_container}`}>
    <h1>
      Hi, I`m
      {' '}
      <span className={theme === 'dark' ? `${classes.dark_name_color}` : `${classes.light_name_color}`}>
        {about.name}
      </span>
      .
    </h1>
    <h2>
      {about.role}
    </h2>
    <p>
      {about.description}
    </p>
    <div className={theme === 'dark' ? `${classes.dark_about_contacts}` : `${classes.light_about_contacts}`}>
      <a href={about.social.github}>
        <GitHubIcon
          className={theme === 'dark' ? `${classes.dark_contact_icon}` : `${classes.light_contact_icon}`}
          sx={{ fontSize: '2.5rem' }}
        />
      </a>
      <a href={about.social.linkedin}>
        <LinkedInIcon
          className={theme === 'dark' ? `${classes.dark_contact_icon}` : `${classes.light_contact_icon}`}
          sx={{ fontSize: '2.5rem' }}
        />
      </a>
    </div>
  </div>
  );
};

export default AboutComponent;
