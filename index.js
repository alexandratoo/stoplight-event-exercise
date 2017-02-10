(function() {
  'use strict';
  var controls = document.getElementById('controls');
  var stop = document.getElementById('stopButton');
  var slow = document.getElementById('slowButton');
  var go = document.getElementById('goButton');
  var red = document.getElementById('stopLight');
  var orange = document.getElementById('slowLight');
  var green = document.getElementById('goLight');
  controls.addEventListener('click', function(){
    console.log('Event target', event.target);
    if (event.target.id === 'stopButton'){
      red.classList.toggle('stop');
      orange.classList.remove('slow');
      green.classList.remove('go');
      console.log('Red bulb on');
    } else if (event.target.id === 'slowButton') {
      orange.classList.toggle('slow');
      red.classList.remove('stop');
      green.classList.remove('go');
      console.log('Orange bulb on');
    } else if (event.target.id === 'goButton') {
      green.classList.toggle('go');
      red.classList.remove('stop');
      orange.classList.remove('slow');
      console.log('Green bulb on');
    }
  })
})();
controls.addEventListener("mouseover", function(){
  if (event.target.id === "stopButton") {
    console.log("Entered stopRed ");
  } else if  (event.target.id === "slowButton") {
    console.log("Entered slowOrange button");
  } else if (event.target.id === "goButton") {
    console.log("Entered goGreen button");
  }
})
controls.addEventListener("mouseout", function(){
  if (event.target.id === "stopButton") {
    console.log("Left stopRed ");
  } else if  (event.target.id === "slowButton") {
    console.log("Left slowOrange button");
  } else if (event.target.id === "goButton") {
    console.log("Left goGreen button");
  }
})

  // document.addEventListener('DOMContentLoaded', function() {
  //
  //
  //   document.getElementsByTagName('body')[0];
  //   body.addEventLIstener('click', function() {
  //     console.log('this', this);
  //     console.log('event', event.target)
  //   }
  //   var stopButton = document.getElementsByTagName('stopButton')[0];
  //   stopButton.addEventLIstener('click', function)() {
  //     toggleButtons(value, button) {
  //         if (value === 1) {
  //             activateButton(button);
  //         } else {
  //             disableButton(button);
  //         }
  //
  //   }
  //   var slowButton = document.getElementsByTagName('slowButton')[0];
  //   slowButton.addEventListener('click',)function(){
  //     toggleButtons(value, button) {
  //         if (value === 1) {
  //             activateButton(button);
  //         } else {
  //             disableButton(button);
  //
  //   }
  //   }
  //   var goButton = document.getElementsByTagName('goButton')[0];
  //   slowButton.addEventListener('click',)function(){
  //     toggleButtons(value, button) {
  //         if (value === 1) {
  //             activateButton(button);
  //         } else {
  //             disableButton(button);
  //         }
  //
  //   }
// })();
// var mainButton = document.querySelector("#mainButton");
// var onButton = document.querySelector("#onButton");
// var offButon = document.querySelector("#offButton");
//
// var element; // declare the element here and change it from toggleButtons when needed.
//
// function clickHandler() {
//     document.querySelector(element).classList.toggle('yellow');
// }
// function activateButton(button) { // You missed this part
//     button.addEventListener('click', clickHandler);
// }
// function disableButton(button) {
//     button.removeEventListener('click', clickHandler);
// }
//
// function toggleButtons(value, button) {
//     if (value === 1) {
//         activateButton(button);
//     } else {
//         disableButton(button);
//     }
// };
//
// stopButton.addEventListener('click', function() {
//     element = 'body'; // you can change it to some other element
//     toggleButtons(1, mainButton);
// });
// slowButton.addEventListener('click', function() {
//     element = 'body'; // you can change it to some other element
//     toggleButtons(0, mainButton);
// });
// slowButton.addEventListener('click', function() {
//     element = 'body'; // you can change it to some other element
//     toggleButtons(0, mainButton);
// });
