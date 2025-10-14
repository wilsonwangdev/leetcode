/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30203
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * 分析：按顺序遍历，每次遍历完一圈，行列都要减1，直到行列都为0
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  let rowStart = 0,
    rowEnd = matrix.length - 1,
    colStart = 0,
    colEnd = matrix[0].length - 1;
  let res = [];
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let col = colStart; col <= colEnd; col++) {
      res.push(matrix[rowStart][col]);
    }
    rowStart++;
    for (let row = rowStart; row <= rowEnd; row++) {
      res.push(matrix[row][colEnd]);
    }
    colEnd--;
    if (rowStart <= rowEnd) {
      for (let col = colEnd; col >= colStart; col--) {
        res.push(matrix[rowEnd][col]);
      }
      rowEnd--;
    }
    if (colStart <= colEnd) {
      for (let row = rowEnd; row >= rowStart; row--) {
        res.push(matrix[row][colStart]);
      }
      colStart++;
    }
  }
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,2],[3,4]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */

export { spiralOrder };
