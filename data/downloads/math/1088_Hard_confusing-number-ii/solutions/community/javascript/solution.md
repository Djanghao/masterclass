# JavaScript - DFS

**Author:** nemtsv
**Votes:** 1
**Link:** [https://leetcode.com/problems/confusing-number-ii/solutions/519184/](https://leetcode.com/problems/confusing-number-ii/solutions/519184/)

---

via https://leetcode.com/problems/confusing-number-ii/discuss/408771/Python-ugly-backtracking-solution/385829

```
var confusingNumberII = function(N) {
  const valid = [[0, 0], [1, 1], [6, 9], [8, 8], [9, 6]];
  function dfs(num, rotated, order) {
    let count = 0;
    if (num !== rotated) count++;
    for (const [dig, rot] of valid) {
      if (num === 0 && dig === 0) continue;
      if (num * 10 + dig > N) break;
      count += dfs(num * 10 + dig, rot * order + rotated, order * 10);
    }
    
    return count;
  }
  
  return dfs(0, 0, 1);
};
```