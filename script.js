const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission to refresh the page
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Validate height
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please provide a valid height.`;
    }
    // Validate weight
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide a valid weight.`;
    } 
    // Calculate BMI
    else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }
});
