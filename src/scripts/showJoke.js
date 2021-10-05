import clearDom from './helpers/clearDom';

const showJoke = (obj = {}) => {
  clearDom();
  document.querySelector('#joke-container').innerHTML = `
    <h5>${obj.setup}</h5>
    `;
  document.querySelector('#button-container').innerHTML = `
    <button class="btn btn-success btn-lg mb-4" id="punchline-btn"> GET PUNCHLINE</button>
    `;
};
export default showJoke;
