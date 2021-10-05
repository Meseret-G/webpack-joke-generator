import domBuilder from './domBuilder';
import domEvents from './domEvents';
import homePage from './homePage';

const startApp = () => {
  domBuilder();
  domEvents();
  homePage();
};
export default startApp;
