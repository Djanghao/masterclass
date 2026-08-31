# Javascript - HashMap

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-linear-stock-score/solutions/4158941/](https://leetcode.com/problems/maximum-linear-stock-score/solutions/4158941/)

---

# Code
```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxScore = function (prices) {
  let ans = 0;
  const n = prices.length;
  const groups = {};

  for (let i = 0; i < n; i++) {
    const curr = prices[i] - i + 1;
    groups[curr] = groups[curr] || 0;
    groups[curr] += prices[i];

    ans = Math.max(ans, groups[curr]);
  }

  return ans;
};

```