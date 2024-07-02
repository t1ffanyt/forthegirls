
function calculateWPKG() {
    const power = document.getElementById('power').value;
    const pounds = document.getElementById('weight').value;

    kilograms = convertPoundsToKilograms(pounds);

    if (power && kilograms) {
        const ftp = power;
        const wpk = (power / kilograms).toFixed(2);
        console.log(power/kilograms);

        document.getElementById('wpkResult').textContent = `Your WPK is: ${wpk} W/kg`;
    } else {
        alert('Please enter both your FTP and weight.');
    }
}

function convertPoundsToKilograms(pounds){

    if (pounds) {
        const kg = (pounds / 2.2046).toFixed(2);
        return kg
    }

    return 0
}

console.log("calulateWPK.js is loaded");
