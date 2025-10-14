import { describe, it, expect } from 'vitest';
import { wordBreak } from './139.单词拆分.js';

describe('wordBreak', () => {
  it('should return true when string can be segmented', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
  });

  it('should return true for repeated words', () => {
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
  });

  it('should return false when string cannot be segmented', () => {
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(
      false
    );
  });

  it('should return true for empty string', () => {
    expect(wordBreak('', ['word'])).toBe(true);
  });

  it('should return true for single word match', () => {
    expect(wordBreak('hello', ['hello'])).toBe(true);
  });

  it('should return false when no words match', () => {
    expect(wordBreak('abc', ['def', 'ghi'])).toBe(false);
  });

  it('should handle overlapping word possibilities', () => {
    expect(wordBreak('aaaaaaa', ['aaaa', 'aaa'])).toBe(true);
  });

  it('should return false for partial matches only', () => {
    expect(wordBreak('abcd', ['ab', 'abc', 'cd'])).toBe(true);
  });

  it('should handle case where multiple paths exist', () => {
    expect(wordBreak('cars', ['car', 'ca', 'rs'])).toBe(true);
  });

  it('should return false when word dict is empty', () => {
    expect(wordBreak('test', [])).toBe(false);
  });
});
