/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30203
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    // 以 s[i] 为中心的最长回文子串
    let s1 = palindrome(s, i, i);
    // 以 s[i] 和 s[i+1] 为中心的最长回文子串
    let s2 = palindrome(s, i, i + 1);
    // res = longest(res, s1, s2)
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};

const palindrome = function (s, l, r) {
  // 防止索引越界
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    // 向两边展开
    l--;
    r++;
  }
  // 此时 s[l+1..r-1] 就是最长回文串
  return s.substring(l + 1, r);
};
// @lc code=end

/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

export { longestPalindrome };
