export const LBS_PER_KG = 2.2046;

export function convertPoundsToKilograms(pounds) {
  const value = Number(pounds);
  if (!Number.isFinite(value) || value <= 0) return 0;
  return value / LBS_PER_KG;
}

export function convertKilogramsToPounds(kilograms) {
  const value = Number(kilograms);
  if (!Number.isFinite(value) || value <= 0) return 0;
  return value * LBS_PER_KG;
}

/**
 * Watts per kilogram, rounded to 2 decimals.
 * Returns null when either input is missing or not a positive number.
 */
export function calculateWPK(power, kilograms) {
  const watts = Number(power);
  const kg = Number(kilograms);
  if (!Number.isFinite(watts) || !Number.isFinite(kg) || watts <= 0 || kg <= 0) {
    return null;
  }
  return Number((watts / kg).toFixed(2));
}

/**
 * Convenience wrapper used by the UI.
 * `unit` is 'imperial' (weight in lbs) or 'metric' (weight in kg).
 */
export function calculateWPKG(power, weight, unit = 'imperial') {
  const kilograms = unit === 'imperial' ? convertPoundsToKilograms(weight) : Number(weight);
  return calculateWPK(power, kilograms);
}
