// let file = "gerta.txt"
// fetch(file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y)

function fetchRandomDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById('dogImage').src = data.message; 
    });
  }
  