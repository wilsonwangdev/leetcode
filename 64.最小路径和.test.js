import { describe, it, expect } from 'vitest';
import { minPathSum } from './64.最小路径和.js';

describe('minPathSum', () => {
  it('should handle 1x1 grid', () => {
    expect(minPathSum([[5]])).toBe(5);
  });

  it('should handle single row grid', () => {
    expect(minPathSum([[1, 2, 3]])).toBe(6);
  });

  it('should handle single column grid', () => {
    expect(minPathSum([[1], [2], [3]])).toBe(6);
  });

  it('should find minimum path sum in 3x3 grid', () => {
    expect(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(7);
  });

  it('should find minimum path sum in 2x3 grid', () => {
    expect(minPathSum([[1, 2, 3], [4, 5, 6]])).toBe(12);
  });

  it('should handle grid with larger values', () => {
    expect(minPathSum([[1, 4, 8], [3, 7, 2], [2, 1, 5]])).toBe(12);
  });

  it('should handle 2x2 grid', () => {
    expect(minPathSum([[1, 2], [3, 4]])).toBe(7);
  });
});
