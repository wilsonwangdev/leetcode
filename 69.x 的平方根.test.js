import { describe, it, expect } from 'vitest';
import { mySqrt } from './69.x 的平方根.js';

describe('mySqrt', () => {
  it('should return 0 for x = 0', () => {
    expect(mySqrt(0)).toBe(0);
  });

  it('should return 1 for x = 1', () => {
    expect(mySqrt(1)).toBe(1);
  });

  it('should return exact square root for perfect squares', () => {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(9)).toBe(3);
    expect(mySqrt(16)).toBe(4);
    expect(mySqrt(25)).toBe(5);
    expect(mySqrt(100)).toBe(10);
  });

  it('should return floor of square root for non-perfect squares', () => {
    expect(mySqrt(8)).toBe(2);
    expect(mySqrt(10)).toBe(3);
    expect(mySqrt(15)).toBe(3);
    expect(mySqrt(24)).toBe(4);
    expect(mySqrt(99)).toBe(9);
  });

  it('should handle large numbers', () => {
    expect(mySqrt(2147395599)).toBe(46339);
  });

  it('should handle small non-perfect squares', () => {
    expect(mySqrt(2)).toBe(1);
    expect(mySqrt(3)).toBe(1);
  });
});
