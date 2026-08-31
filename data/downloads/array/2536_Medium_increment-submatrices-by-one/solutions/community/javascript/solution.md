# JS Brute force! Can get the job done!

**Author:** hanbi58
**Votes:** 3
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3053516/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3053516/)

---

# Intuition
Brute force

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n^2)

# Code
```
var rangeAddQueries = function (n, queries) {
  const mat = new Array(n).fill().map(() => new Array(n).fill(0));
  for (let q of queries) {
    for (let i = q[0]; i <= q[2]; i++) {
      for (let j = q[1]; j <= q[3]; j++) {
        mat[i][j]++;
      }
    }
  }
  return mat;
};

```