import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from './3.无重复字符的最长子串.js';

describe('lengthOfLongestSubstring', () => {
  it('should return correct length for string with repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3); // "abc"
  });

  it('should return 1 for string with all same characters', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1); // "b"
  });

  it('should handle string with mixed repeating characters', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3); // "wke"
  });

  it('should return 0 for empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('should return 1 for single character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  it('should return full length for string with no repeating characters', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6);
  });

  it('should handle string with spaces', () => {
    expect(lengthOfLongestSubstring('a b c')).toBe(3); // "a b" or " bc"
  });

  it('should handle string with special characters', () => {
    expect(lengthOfLongestSubstring('a!b@c#')).toBe(6);
  });

  it('should handle repeating pattern at the end', () => {
    expect(lengthOfLongestSubstring('abcdefgg')).toBe(7); // "abcdefg"
  });

  it('should handle repeating pattern at the beginning', () => {
    expect(lengthOfLongestSubstring('aabcdef')).toBe(6); // "abcdef"
  });

  it('should handle alternating characters', () => {
    expect(lengthOfLongestSubstring('abba')).toBe(2); // "ab" or "ba"
  });

  it('should handle long string with one duplicate', () => {
    expect(lengthOfLongestSubstring('abcdefga')).toBe(7); // "bcdefga"
  });
});
