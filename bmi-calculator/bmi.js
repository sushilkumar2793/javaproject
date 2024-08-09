document.querySelector('#bmiForm').addEventListener('submit', function (submitevent) {
    submitevent.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results1 = document.querySelector('#results');

    if (isNaN(height) || isNaN(weight)) {
        results1.innerHTML = `<span>Please enter valid height and weight!</span>`;
        return;
    }

    const bmi = ((weight / (height * height)) * 10000).toFixed(2);

    results1.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
});
