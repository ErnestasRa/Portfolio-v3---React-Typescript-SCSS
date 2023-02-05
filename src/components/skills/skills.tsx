import * as React from 'react';
import { skills } from 'portfolio';
import { ThemeContext } from 'context/theme';
import uniqid from 'uniqid';
import classes from './skills.module.scss';

const SkillsComponent:React.FC = () => {
  const { theme } = React.useContext(ThemeContext);

return (
  <div className={classes.skills_container} id="#skills">
    <h2 className={theme === 'dark' ? classes.dark_title : classes.light_title}>Skills</h2>
    <ul className={theme === 'dark' ? classes.dark_skills_list : classes.light_skills_list}>
      {skills.map((skill) => <li key={uniqid()}>{skill}</li>)}
    </ul>
  </div>
  );
};

export default SkillsComponent;
