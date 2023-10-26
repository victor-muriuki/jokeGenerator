document.getElementById('getJoke').addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      const jokeContainer = document.getElementById('jokeContainer');
      jokeContainer.innerHTML = `<p>${data.joke}</p>`;
    })
    .catch(error => console.error('Error:', error));
  });
  


