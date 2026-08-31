# TypeScript/JavaScript Dynamic Programming Solution

**Author:** the-technomancer
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/1932301/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/1932301/)

---

```
const minScoreTriangulation = (values: number[]): number => {
  const dp = new Array(values.length + 1)
    .fill(0)
    .map(() => new Array(values.length + 1).fill(null));

  return minScoreTriangulationHelper(values, dp, 0, values.length - 1);
};

const minScoreTriangulationHelper = (
  values: number[],
  dp: number[][],
  row: number,
  col: number
): number => {
  if (col - row <= 1) return 0;

  if (dp[row][col] !== null) return dp[row][col];

  dp[row][col] = Number.MAX_VALUE;

  for (let i = row + 1; i < col; i++) {
    dp[row][col] = Math.min(
      dp[row][col],
      minScoreTriangulationHelper(values, dp, row, i) +
        values[row] * values[i] * values[col] +
        minScoreTriangulationHelper(values, dp, i, col)
    );
  }

  return dp[row][col];
};
```