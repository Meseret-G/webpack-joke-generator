import getJoke from './jokeData';
import showJoke from '../showJoke';
import showPunchline from '../showPunchline';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('joke-btn')) {
      console.warn('joke');
      getJoke().then(showJoke);
    }
    if (e.target.id.includes('punchline-btn')) {
      getJoke().then(showPunchline);
    }
  });
};

export default domEvents;
