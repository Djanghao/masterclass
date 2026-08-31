# javascript dp 179ms

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1749124/](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1749124/)

---

```
const minimumTime = (s) => {
    let n = s.length, minCostLM = 0, res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
	   // update min cost from left compared with just middle, i + 1: all use left cost, minCostLM + 2: prev left cost + current middle cost
        if (s[i] == '1') minCostLM = Math.min(i + 1, minCostLM + 2); 
        let rightCost = n - i - 1;
        res = Math.min(res, minCostLM + rightCost);
    }
    return res;
};
```