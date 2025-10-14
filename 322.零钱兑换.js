/*
 * @lc app=leetcode.cn id=322 lang=javascript
 * @lcpr version=30203
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  // dp 数组全都初始化为特殊值
  let memo = Array(amount + 1).fill(-666);

  const dp = function (coins, amount) {
    if (amount == 0) return 0;
    if (amount < 0) return -1;
    // 查备忘录，防止重复计算
    if (memo[amount] != -666) return memo[amount];

    let res = Infinity;
    for (let coin of coins) {
      // 计算子问题的结果
      let subProblem = dp(coins, amount - coin);
      // 子问题无解则跳过
      if (subProblem == -1) continue;
      // 在子问题中选择最优解，然后加一
      res = Math.min(res, subProblem + 1);
    }
    // 把计算结果存入备忘录
    memo[amount] = res === Infinity ? -1 : res;
    return memo[amount];
  };

  return dp(coins, amount);
};
// @lc code=end

/*
// @lcpr case=start
// [1, 2, 5]\n11\n
// @lcpr case=end

// @lcpr case=start
// [2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */

export { coinChange };
