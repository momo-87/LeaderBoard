// import style from style.css file (required)
import './style.css';

// Import the required functions
import {
  addScore, populateScores, clearInputs, errorMsg,
} from './modules/functions.js';

// Implement the refresh button action
document.querySelector('.refresh-button').addEventListener('click', (event) => {
  event.preventDefault();
  populateScores();
});

// Implement the submit-button action
document.querySelector('.submit-button').addEventListener('click', (event) => {
  event.preventDefault();
  errorMsg();
  const userName = document.querySelector('#name').value;
  const userScore = document.querySelector('#score').value;
  addScore(userName, userScore);
  clearInputs();
});
