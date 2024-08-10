// // Function to generate a random hex color
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Event listener for the button click
// document.querySelector('#btn').addEventListener('click', function () {
//     const newColor = getRandomColor();
//     document.body.style.backgroundColor = newColor;
//     document.querySelector('#color').textContent = newColor;
// });
const button = document.querySelector("#btn");
const body = document.querySelector("body");

button.addEventListener('click', function (e) {
    if (e.target.id === "btn") {
        let randomColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
        console.log(randomColor);
        body.style.backgroundColor = randomColor;
    }
});












