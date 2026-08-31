# [TypeScript / Javascript] Simple Array.from one-liner solution, faster than 100%

**Author:** 4x13
**Votes:** 3
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/2100662/](https://leetcode.com/problems/transpose-matrix/solutions/2100662/)

---

```typescript
function transpose(matrix: number[][]): number[][] {
  return Array.from({length: matrix[0].length}, (_, r) => 
    Array.from({length: matrix.length}, (_, c) => matrix[c][r])
  );
};
```

Runtime: 81 ms, faster than 100.00% of TypeScript online submissions for Transpose Matrix.
Memory Usage: 45.3 MB, less than 77.27% of TypeScript online submissions for Transpose Matrix.
