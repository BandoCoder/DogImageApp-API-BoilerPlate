'use strict';
function getDogImages(userInput) {
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
      .then(response => response.json())
      .then(responseJson =>
        displayResults(responseJson))
        
      .catch(error => alert(`Something went wrong. NO DOGS FOR YOU.`));
}

function displayResults(responseJson) {
    let imgClass = `<div class = 'imageClass'></div>`
    let images = '';
    for (let i = 0; i < responseJson.message.length; i++ ){
      images += `<img src='${responseJson.message[i]}' class='results-img'>`
      imgClass = `<div class = 'imageClass'>${images}</div>`
      
    }
    $('.imageClass').replaceWith(imgClass);
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const userInput = $('#dInput').val()
          getDogImages(userInput);
        

 })
}


$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });