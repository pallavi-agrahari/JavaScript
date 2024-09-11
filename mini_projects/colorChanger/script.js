
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });
// document.getElementById('grey').onclick = function () {
//   document.body.style.backgroundColor = 'grey';
// };

// document.getElementById('white').onclick = function () {
//   document.body.style.backgroundColor = 'white';
// };

// document.getElementById('blue').onclick = function () {
//   document.body.style.backgroundColor = 'blue';
// };

// document.getElementById('yellow').onclick = function () {
//   document.body.style.backgroundColor = 'yellow';
// };
// Function to change background color
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Adding event listeners to buttons
document.getElementById('grey').addEventListener('click', function() {
  changeBackgroundColor('grey');
});

document.getElementById('white').addEventListener('click', function() {
  changeBackgroundColor('white');
});

document.getElementById('blue').addEventListener('click', function() {
  changeBackgroundColor('blue');
});

document.getElementById('yellow').addEventListener('click', function() {
  changeBackgroundColor('yellow');
});
