# Javascript - Binary Search

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-alloys/solutions/4135668/](https://leetcode.com/problems/maximum-number-of-alloys/solutions/4135668/)

---

# Code
```
/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function (n, k, budget, composition, stock, cost) {
  let ans = 0;
  let low = 0;
  let high = Math.pow(10, 9);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (isOk(budget, composition, stock, cost, mid)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};

function isOk(budget, composition, stock, cost, alloys) {
  let minCost = Infinity;

  for (let i = 0; i < composition.length; i++) {
    let currCost = 0;
    for (let j = 0; j < composition[i].length; j++) {
      const required = alloys * composition[i][j];
      if (stock[j] >= required) continue;
      currCost += (required - stock[j]) * cost[j];
    }
    minCost = Math.min(minCost, currCost);
  }

  return minCost <= budget;
}

```