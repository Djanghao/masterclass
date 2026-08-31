# Typescript : 1 loop easy solution (Runtime beats 98%)

**Author:** alexgavrilov
**Votes:** 2
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/3315566/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/3315566/)

---

# Code
```
function diagonalSum(mat: number[][]): number {
  if (mat.length == 1) return mat[0][0];

  let sum: number = 0;
  for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
      if (i != j) {
        sum += mat[i][j];
      }
      sum += mat[i][i];
  }

  return sum;
};
```