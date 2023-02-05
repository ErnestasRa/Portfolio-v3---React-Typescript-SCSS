import * as React from 'react';
import { about } from 'portfolio';
import { ThemeContext } from 'context/theme';
import classes from './footer.module.scss';

const FooterComponent:React.FC = () => {
  const { theme } = React.useContext(ThemeContext);

return (
  <div className={classes.footer_container}>
    <span className={theme === 'dark' ? classes.dark_footer : classes.light_footer}>
      {about.name}
    </span>
  </div>
  );
};
export default FooterComponent;
