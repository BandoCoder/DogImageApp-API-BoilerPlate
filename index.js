'use strict';
function getDogImages(userInput) {
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
      .then(response => response.json())
      .then(responseJson =>
        displayResults(responseJson))
      .catch(error => alert(`Something went wrong. NO DOGS FOR YOU.`));
}

function displayResults(responseJson) {
    $('.results-img').replaceWith(
        `<img src="${responseJson.message}" class="results-img">`
      )
    console.log(responseJson);
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let userInput = $('#dInput').val()
        getDogImages(userInput);
    })
}
$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });