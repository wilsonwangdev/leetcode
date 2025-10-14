import { describe, it, expect } from 'vitest';
import { longestPalindrome } from './5.最长回文子串.js';

describe('longestPalindrome', () => {
  it('should return odd-length palindrome', () => {
    expect(longestPalindrome('babad')).toMatch(/^(bab|aba)$/);
  });

  it('should return even-length palindrome', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
  });

  it('should return single character for string with length 1', () => {
    expect(longestPalindrome('a')).toBe('a');
  });

  it('should return entire string when all characters are same', () => {
    expect(longestPalindrome('aaaa')).toBe('aaaa');
  });

  it('should return single character when no longer palindrome exists', () => {
    const result = longestPalindrome('abcdef');
    expect(result.length).toBe(1);
    expect('abcdef').toContain(result);
  });

  it('should handle palindrome at the beginning', () => {
    expect(longestPalindrome('racecarabc')).toBe('racecar');
  });

  it('should handle palindrome at the end', () => {
    expect(longestPalindrome('abcracecar')).toBe('racecar');
  });

  it('should handle palindrome in the middle', () => {
    expect(longestPalindrome('abcracecarde')).toBe('racecar');
  });

  it('should return longer even palindrome over odd', () => {
    expect(longestPalindrome('abccba')).toBe('abccba');
  });

  it('should return longer odd palindrome over even', () => {
    expect(longestPalindrome('aabaa')).toBe('aabaa');
  });

  it('should handle multiple palindromes of same length', () => {
    const result = longestPalindrome('abacabad');
    expect(result).toBe('abacaba');
    expect(result.length).toBe(7);
  });

  it('should handle two character string with same chars', () => {
    expect(longestPalindrome('aa')).toBe('aa');
  });

  it('should handle two character string with different chars', () => {
    expect(longestPalindrome('ab')).toMatch(/^[ab]$/);
  });
});
