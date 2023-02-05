import * as React from 'react';
import { contact } from 'portfolio';
import { ThemeContext } from 'context/theme';
import classes from './contact.module.scss';

const ContactComponent:React.FC = () => {
  const { theme } = React.useContext(ThemeContext);

return (
  <div className={theme === 'dark' ? classes.dark_contact_container : classes.light_contact_container} id="#contact">
    <h2>Contact</h2>
    <a href={`mailto:${contact.email}`}>
      <span className={classes.btn}>Contact</span>
    </a>
  </div>
  );
};

export default ContactComponent;
