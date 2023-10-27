document.getElementById('getJoke').addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      const jokeContainer = document.getElementById('jokeContainer')
      jokeContainer.innerHTML = `<p>${data.joke}</p>`
    }) //a variabale that stores the fetched joke
    .catch(error => console.error('Error:', error)) 
  })// displays message in the event of an error
  



