"use strict";
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
const apiKey = "IdfdYntEsRMtYfqEN41j6HnIMA4LPsEYcyN21y5x";

document.addEventListener("DOMContentLoaded", function () {
  fetch(baseUrl + apiKey)
    .then((response) => response.json())
    .then((planet) => {
      let planetImage;
      planet.media_type == "video"
        ? (planetImage = `<iframe class="planet__image" src="${planet.url}" title="astronomy picture of the day"></iframe>`)
        : (planetImage = `<img class="planet__image" src="${planet.url}" alt="astronomy picture of the day"></img>`);

      let apodContent = `<h2 class="planet__name">${planet.title}</h2>
                  <div class="planet__date">${planet.date}</div>
                  ${planetImage}
                  <div class="planet__text">${planet.explanation}</div>`;

      document.getElementById("planet").innerHTML = apodContent;
      document.getElementById("footer").innerHTML = planet.copyright
        ? `<div>©${planet.copyright}</div>`
        : "";
    })
    .catch((error) => console.log(error));
});
