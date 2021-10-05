const showPunchline = (obj = {}) => {
  document.querySelector('#joke-container').innerHTML += `
    <h4>${obj.delivery}</h4>
    `;
  document.querySelector('#button-container').innerHTML = `
    <button class="btn btn-success btn-lg mb-4" id="new-joke-btn">GET A NEW JOKE</button>
    `;
};

export default showPunchline;
