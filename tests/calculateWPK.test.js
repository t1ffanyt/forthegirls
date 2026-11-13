import {
  calculateWPK,
  calculateWPKG,
  convertKilogramsToPounds,
  convertPoundsToKilograms,
} from '../src/utility/calculateWPKG.js';

describe('calculateWPK', () => {
  test('calculates watts per kilogram to 2 decimals', () => {
    expect(calculateWPK(190, 63.5)).toBe(2.99);
    expect(calculateWPK(200, 50)).toBe(4);
  });

  test('returns null for missing or non-positive input', () => {
    expect(calculateWPK('', 60)).toBeNull();
    expect(calculateWPK(200, '')).toBeNull();
    expect(calculateWPK(0, 60)).toBeNull();
    expect(calculateWPK(200, 0)).toBeNull();
    expect(calculateWPK(-5, 60)).toBeNull();
    expect(calculateWPK('abc', 60)).toBeNull();
  });
});

describe('unit conversion', () => {
  test('pounds to kilograms', () => {
    expect(convertPoundsToKilograms(220.46)).toBeCloseTo(100, 1);
    expect(convertPoundsToKilograms('')).toBe(0);
    expect(convertPoundsToKilograms(-3)).toBe(0);
  });

  test('kilograms to pounds', () => {
    expect(convertKilogramsToPounds(100)).toBeCloseTo(220.46, 2);
    expect(convertKilogramsToPounds(0)).toBe(0);
  });
});

describe('calculateWPKG', () => {
  test('imperial weights are converted from lbs', () => {
    // 140 lb ≈ 63.5 kg, so 190 W ≈ 2.99 W/kg
    expect(calculateWPKG(190, 140, 'imperial')).toBe(2.99);
  });

  test('metric weights are used as kg', () => {
    expect(calculateWPKG(190, 63.5, 'metric')).toBe(2.99);
  });

  test('defaults to imperial', () => {
    expect(calculateWPKG(190, 140)).toBe(2.99);
  });

  test('returns null until both fields are filled in', () => {
    expect(calculateWPKG('', 140, 'imperial')).toBeNull();
    expect(calculateWPKG(190, '', 'metric')).toBeNull();
  });
});
