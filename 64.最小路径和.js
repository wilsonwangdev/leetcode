/*
 * @lc app=leetcode.cn id=64 lang=javascript
 * @lcpr version=30203
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * 解释：动态规划，dp[i][j]表示到达(i,j)的最小路径和，dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 * @param {number[][]} grid
 * @return {number}
 */
export var minPathSum = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

/*
// @lcpr case=start
// [[1,3,1],[1,5,1],[4,2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6]]\n
// @lcpr case=end

 */
