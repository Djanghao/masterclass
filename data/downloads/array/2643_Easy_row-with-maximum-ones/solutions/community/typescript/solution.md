# Runtime 2 ms Beats 100% - Memory 59.56 MB Beats 42.86%

**Author:** Berengar
**Votes:** 0
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/6126326/](https://leetcode.com/problems/row-with-maximum-ones/solutions/6126326/)

---

# Complexity
- Time complexity: runtime 2 ms Beats 100%

- Space complexity: memory 59.56 MB Beats 42.86%

# Code
```typescript []
const rowAndMaximumOnes = (mat: number[][]): number[] => {
  let maxRowIndex = 0;
  let maxOnes = 0;
  for (let i = 0; i < mat.length; i++) {
    let sumOfOnes = 0;
    for (let j = 0; j < mat[i].length; j++) {
      sumOfOnes += mat[i][j];
    }
    if (sumOfOnes > maxOnes) {
      maxOnes = sumOfOnes;
      maxRowIndex = i;
    }
  }
  return [maxRowIndex, maxOnes];
}
```