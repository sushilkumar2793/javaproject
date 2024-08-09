// document.getElementById('redButton').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });

// document.getElementById('yellowButton').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'yellow';
// });

// document.getElementById('greenButton').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'green';
// });


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
const buttons =document.querySelectorAll(".button");
const body=document.querySelector("body");

buttons.forEach(function (but){
but.addEventListener("click",function (e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==="grey"){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="white"){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="blue"){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="yellow"){
        body.style.backgroundColor=e.target.id
    }
} )
} )

