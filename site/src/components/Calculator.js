import React, { useState } from 'react';

const Calculator = () => {
    const [power, setPower] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState('');

    const calculateWPKG = () => {
        const kilograms = convertPoundsToKilograms(weight);
        if (power && kilograms) {
            const wpk = (power / kilograms).toFixed(2);
            setResult(`Your WPK is: ${wpk} W/kg`);
        } else {
            alert('Please enter both your FTP and weight.');
        }
    };

    const convertPoundsToKilograms = (pounds) => {
        return pounds ? (pounds / 2.2046).toFixed(2) : 0;
    };

    return (
        <section id="calculator">
            <h2>Calculate Your Watts Per Kilogram</h2>
            <form id="calcForm">
                <label className="power_example"> <em>FTP = 95% of your best average 20 minute power</em></label>
                <label className="power_example"> <em>Example: .95 x best avg 20 minute power = .95 x 200 = 190 watts</em></label>
                <label htmlFor="power">Enter your FTP (Watts):</label>
                <input 
                    type="number" 
                    id="power" 
                    name="power" 
                    value={power}
                    onChange={(e) => setPower(e.target.value)} 
                    required 
                />
                <label htmlFor="weight">Enter your weight (lbs):</label>
                <input 
                    type="number" 
                    id="weight" 
                    name="weight" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)} 
                    required 
                />
                <button type="button" onClick={calculateWPKG}>Calculate</button>
            </form>
            <div id="results">
                <p id="wpkResult">{result}</p>
            </div>
        </section>
    );
};

export default Calculator;
