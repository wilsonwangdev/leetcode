/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30203
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let window = new Map();

  let left = 0,
    right = 0;
  // 记录结果
  let res = 0;
  while (right < s.length) {
    let c = s.charAt(right);
    right++;
    // 进行窗口内数据的一系列更新
    window.set(c, (window.get(c) || 0) + 1);
    // 判断左侧窗口是否要收缩
    while (window.get(c) > 1) {
      let d = s.charAt(left);
      left++;
      // 进行窗口内数据的一系列更新
      window.set(d, window.get(d) - 1);
    }
    // 在这里更新答案
    res = Math.max(res, right - left);
  }
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

export { lengthOfLongestSubstring };
