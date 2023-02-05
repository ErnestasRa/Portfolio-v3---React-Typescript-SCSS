import * as React from 'react';
import { header } from 'portfolio';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from 'context/theme';
import { scrollToDiv } from 'functions/scrollTo';
import classes from './navbar.module.scss';

const NavBarComponent:React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

return (
  <div className={theme === 'dark' ? `${classes.dark_navbar}` : `${classes.light_navbar}`} id="#navbar">
    <h3>
      <a href="/">
        {header.title}
      </a>
    </h3>
    <nav>
      <ul>
        <li>
          <a
            href="#projects"
            onClick={() => scrollToDiv('#projects')}
          >
            projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => scrollToDiv('#skills')}
          >
            skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => scrollToDiv('#contact')}
          >
            contact
          </a>
        </li>
        <li className={theme === 'dark' ? `${classes.dark_icon}` : `${classes.light_icon}`}>
          <button onClick={toggleTheme}>
            {' '}
            {theme === 'dark' ? <WbSunnyIcon /> : <DarkModeIcon />}
          </button>
        </li>
      </ul>
    </nav>
  </div>
  );
};
export default NavBarComponent;
