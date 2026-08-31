# Easy memoization with full explanation!

**Author:** ToxicalNoob3062
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5149449/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5149449/)

---

# Intuition
Maximum positive displacement of A(start-pos) to C(end-pos) is maximum positive displacement of any of it's 2 chunks. (ie AB & BC) ! so let point B be the adjacent position at i+1! (it can be any point) but we are taking adjacent becuase then we can do a static call instead of recursive call!

AB->  grid[row + 1][col] - item -> static call
BC->  Math.max(0, maxValueAt(row + 1, col)); -> recursive call


# Approach
Memoization

# Complexity
- Time complexity:
O(m*n)

- Space complexity:
O(m*n)

# Code
```
function maxScore(grid: number[][]): number {
  let m = grid.length;
  let n = grid[0].length;
  let maxScore = -Infinity;
  let dp: number[][] = Array.from({ length: m }, () =>
    Array.from({ length: n },()=>-Infinity)
  );

  maxValueAt(0, 0);
  return maxScore;

  function maxValueAt(row: number, col: number): number {
    //base case

    //going out of bounds
    if (row == m || col == n) return -Infinity;

    //memoization
    if (dp[row][col] != -Infinity) return dp[row][col];

    //recursion-> we can go right or down but it don't have to be adjacent
    let item = grid[row][col];

    //max at right cell will be any one among all the cells in the right direction
    let maxRight = -Infinity;
    let maxBottom = -Infinity;

    if (row != m - 1)
      maxRight =
        grid[row + 1][col] - item + Math.max(0, maxValueAt(row + 1, col));
    if (col != n - 1)
      maxBottom =
        grid[row][col + 1] - item + Math.max(0, maxValueAt(row, col + 1));

    //max of the two directions
    let max = Math.max(maxRight, maxBottom);

    //store the result
    dp[row][col] = max;
    maxScore = Math.max(maxScore, max);
    return max;
  }
}
```