import * as React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ThemeContext } from 'context/theme';
import { scrollToTop, scrollToDiv } from 'functions/scrollTo';
import classes from './scroll-to-top.module.scss';

const ScrollToTop:React.FC = () => {
    const { theme } = React.useContext(ThemeContext);
    const [visible, setVisible] = React.useState<boolean>(false);

    React.useEffect(() => {
        scrollToTop(setVisible);
    }, []);

    return visible ? (
      <div className={theme === 'dark' ? classes.dark_scroll_top : classes.light_scroll_top}>
        <a
          href="#a"
          onClick={() => scrollToDiv('#navbar')}
        >
          <ArrowUpwardIcon
            sx={{ fontSize: '3rem' }}
          />
        </a>
      </div>
    )
      : null;
};
export default ScrollToTop;
