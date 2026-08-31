# [Javascript] Greedily backtracking

**Author:** zachzwy
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1010771/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1010771/)

---

```
/**
 * 1718-construct-the-lexicographically-largest-valid-sequence.js
 *
 * Input: n = 3
 * Output: [3,1,2,3,2]
 *
 * Input: n = 5
 * Output: [5,3,1,4,3,5,2,4,2]
 *
 * Constrcut from large to small, the first returned answer is the final answer
 */
var constructDistancedSequence = function (n) {
  if (n === 1) return [1];
  const res = Array(2 * n - 1).fill(0);
  const seen = new Set();
  const dfs = (idx = 0) => {
    if (idx === 2 * n - 1) return true;
    if (res[idx]) return dfs(idx + 1); // If already filled, go to next
    for (let i = n; i >= 1; i--) {
      if (seen.has(i)) continue;
      if (i === 1 || (idx + i < res.length && !res[idx + i])) {
        res[idx] = i;
        seen.add(i);
        if (i > 1) res[idx + i] = i;
        if (dfs(idx + 1)) return true;
        res[idx] = 0;
        seen.delete(i);
        if (i > 1) res[idx + i] = 0;
      }
    }
  };
  dfs();
  return res;
};
```