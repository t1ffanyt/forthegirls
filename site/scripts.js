function calculateWPK() {
    console.log("Button clicked");
    const power = document.getElementById('power').value;
    const weight = document.getElementById('weight').value;
    
    console.log("Power:", power);
    console.log("Weight:", weight);

    if (power && weight) {
        const ftp = power;
        const wpk = (power / weight).toFixed(2);

        document.getElementById('ftpResult').textContent = `Your FTP is: ${ftp} Watts`;
        document.getElementById('wpkResult').textContent = `Your WPK is: ${wpk} W/kg`;
    } else {
        alert('Please enter both your FTP and weight.');
    }
}

console.log("scripts.js is loaded");
