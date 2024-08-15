
function calculateWPKG() {

    var kilograms; 

    const power = document.getElementById('power_input_box').value;
    const weight = document.getElementById('weight_input_box').value;

    if (document.getElementById('lb-radio').checked) {
        kilograms = convertPoundsToKilograms(weight);
    } else{
        kilograms = weight;
    }
    
    if (power && kilograms) {
        const wpk = calculateWPK(power, kilograms);
        document.getElementById('wpkResult').textContent = `Your WPK is: ${wpk} W/kg`;
    } else {
        alert('Please enter both your FTP and weight.');
    }
}

function calculateWPK(power, kilograms){
    return (power / kilograms).toFixed(2);
}

function convertPoundsToKilograms(pounds){

    if (pounds) {
        const kg = (pounds / 2.2046).toFixed(2);
        return kg
    }

    return 0
}
