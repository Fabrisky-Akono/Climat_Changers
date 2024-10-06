document.getElementById('calculateButton').addEventListener('click', function () {
    const electricityUsage = parseFloat(document.getElementById('electricityUsage').value) || 0;
    const milesDriven = parseFloat(document.getElementById('milesDriven').value) || 0;
    const flightsTaken = parseFloat(document.getElementById('flightsTaken').value) || 0;

    // Estimation simple de l'empreinte carbone
    const carbonFootprint = (electricityUsage * 0.5) + (milesDriven * 0.25) + (flightsTaken * 1.5); // Coefficients hypothétiques

    document.getElementById('carbonFootprint').innerText = carbonFootprint.toFixed(2) + ' tonnes de CO₂ par an';
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('suggestions').classList.remove('hidden');
});