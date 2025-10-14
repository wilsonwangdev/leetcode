/*
 * @lc app=leetcode.cn id=69 lang=javascript
 * @lcpr version=30203
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * 分析：二分
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }
  let left = 1;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
// @lc code=end

/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 8\n
// @lcpr case=end

 */

export { mySqrt };
