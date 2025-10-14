import { describe, it, expect } from 'vitest';
import { coinChange } from './322.零钱兑换.js';

describe('coinChange', () => {
  it('should return 0 when amount is 0', () => {
    expect(coinChange([1], 0)).toBe(0);
  });

  it('should return correct minimum coins for valid amount', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3); // 5 + 5 + 1
  });

  it('should return -1 when no solution exists', () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  it('should handle single coin that equals amount', () => {
    expect(coinChange([5], 5)).toBe(1);
  });

  it('should handle multiple coins with optimal solution', () => {
    expect(coinChange([1, 3, 4], 6)).toBe(2); // 3 + 3
  });

  it('should handle large amounts', () => {
    expect(coinChange([1, 2, 5], 100)).toBe(20); // 20 coins of 5
  });

  it('should handle when only smallest coin works', () => {
    expect(coinChange([1, 5, 10], 13)).toBe(4); // 10 + 1 + 1 + 1
  });

  it('should return -1 for impossible combinations', () => {
    expect(coinChange([3, 5], 1)).toBe(-1);
  });
});
