import { useMemo, useState } from 'react';
import UnitToggle from './UnitToggle.jsx';
import NumberField from './NumberField.jsx';
import {
  calculateWPKG,
  convertKilogramsToPounds,
  convertPoundsToKilograms,
} from '../utility/calculateWPKG.js';

export default function Calculator() {
  const [unit, setUnit] = useState('imperial');
  const [power, setPower] = useState('');
  const [weight, setWeight] = useState('');

  const isImperial = unit === 'imperial';
  const wpk = useMemo(() => calculateWPKG(power, weight, unit), [power, weight, unit]);

  // Keep the number the rider typed meaningful when she flips units.
  function handleUnitChange(next) {
    if (next === unit) return;
    const current = Number(weight);
    if (weight !== '' && Number.isFinite(current) && current > 0) {
      const converted =
        next === 'metric' ? convertPoundsToKilograms(current) : convertKilogramsToPounds(current);
      setWeight(String(Number(converted.toFixed(1))));
    }
    setUnit(next);
  }

  function reset() {
    setPower('');
    setWeight('');
  }

  const otherWeight =
    weight !== '' && Number(weight) > 0
      ? isImperial
        ? `${convertPoundsToKilograms(weight).toFixed(1)} kg`
        : `${convertKilogramsToPounds(weight).toFixed(1)} lbs`
      : null;

  return (
    <section className="card" aria-labelledby="calc-title">
      <div className="card-head">
        <h2 id="calc-title">FTP Comparison Calculator</h2>
        <UnitToggle value={unit} onChange={handleUnitChange} />
      </div>

      <form className="form" onSubmit={(e) => e.preventDefault()} noValidate>
        <NumberField
          label="Power (FTP)"
          suffix="W"
          value={power}
          onChange={setPower}
          placeholder="e.g. 190"
          hint="FTP ≈ 95% of your best 20-minute average power (0.95 × 200 W = 190 W)."
        />
        <NumberField
          label={isImperial ? 'Weight (lbs)' : 'Weight (kg)'}
          suffix={isImperial ? 'lbs' : 'kg'}
          value={weight}
          onChange={setWeight}
          placeholder={isImperial ? 'e.g. 140' : 'e.g. 63.5'}
        />
      </form>

      <div className="result" aria-live="polite">
        <div className="result-main">
          <span className="result-label">Your power-to-weight</span>
          <span className={wpk === null ? 'result-value is-empty' : 'result-value'}>
            {wpk === null ? '--' : wpk.toFixed(2)}
            <span className="result-unit">W/kg</span>
          </span>
        </div>
        <div className="result-side">
          {otherWeight && <span className="chip">{otherWeight}</span>}
          <button type="button" className="reset" onClick={reset} disabled={!power && !weight}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
