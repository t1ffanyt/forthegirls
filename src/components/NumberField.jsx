import { useId } from 'react';

export default function NumberField({ label, suffix, value, onChange, placeholder, hint, max }) {
  const id = useId();
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="input-wrap">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min="0"
          max={max}
          step="any"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="suffix" aria-hidden="true">
          {suffix}
        </span>
      </div>
      {hint && <p className="hint">{hint}</p>}
    </div>
  );
}
