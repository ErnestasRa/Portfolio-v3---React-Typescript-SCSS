import * as React from 'react';
import { ThemeContext } from 'context/theme';
import AboutComponent from 'components/about/about';
import ContactComponent from 'components/contact/contact';
import FooterComponent from 'components/footer/footer';
import NavBarComponent from 'components/navbar/navbar';
import ProjectComponent from 'components/projects/projects';
import SkillsComponent from 'components/skills/skills';
import ScrollToTop from 'components/scrollToTop/scroll-to-top';
import Container from './components/container/container';
import './styles/index.scss';

const App: React.FC = () => {
  const { theme } = React.useContext<ContextType>(ThemeContext);

return (
  <div id="top" className={`${theme}`}>
    <main>
      <Container>
        <NavBarComponent />
        <AboutComponent />
        <ProjectComponent />
        <SkillsComponent />
        <ContactComponent />
        <FooterComponent />
      </Container>
      <ScrollToTop />
    </main>
  </div>
  );
  };

export default App;
