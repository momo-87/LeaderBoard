// Add new game function
export const addNewGame = async (gameName) => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      name: gameName,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

// Add score function
export const addScore = async (userName, userScore) => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:CX9B0AJfTfaG80q9chXf/scores/');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

// Get data from API and populate HTML function
export const populateScores = async () => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:CX9B0AJfTfaG80q9chXf/scores/');
  const response = await fetch(request);
  const data = await response.json();
  const rankingList = document.querySelector('.ranking-list');
  rankingList.innerHTML = ''; // this line is used to remove the previous li elements from the list
  data.result.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${element.user}:</span><span> ${element.score}</span>`;
    rankingList.appendChild(li);
  });
};

// Clear DOM inputs function
export const clearInputs = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach((element) => {
    element.value = '';
  });
};

// Throw error message function
export const errorMsg = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach((element) => {
    if (!element.value) {
      // const form = document.querySelector('.add-score-form');
      const p = document.createElement('p');
      p.textContent = 'Required field';
      p.style.fontSize = '0.8rem';
      p.style.color = 'red';
      element.after(p); // insert p tag after input element
    }
  });
};