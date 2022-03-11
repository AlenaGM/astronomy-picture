"use strict"

document.addEventListener("DOMContentLoaded", function(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=7l6USJJeCaSnkPLvHrVUAsKhFf4FBKt6GtB3HXyS")
    .then(response => response.json())
    .then(planet => {
        console.log('hihihi');

        let apodContent = "7";

        apodContent =
            `<h2 class="planet__name">${planet.title}</h2>
                <div class="planet__date">${planet.date}</div>
                <img class="planet__image" src="${planet.url}" alt="astronomy picture"></img>
                <div class="planet__text">${planet.explanation}</div>`

        document.getElementById("planet").innerHTML = apodContent;
        document.getElementById("footer").innerHTML = `<div>©${planet.copyright}</div>`
    })
    .catch(error => console.log(error));
});


