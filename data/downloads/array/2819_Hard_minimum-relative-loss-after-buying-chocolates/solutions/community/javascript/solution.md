# Javascript - Binary Search + PreSum

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/solutions/4578088/](https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/solutions/4578088/)

---

# Code
```
/**
 * @param {number[]} prices
 * @param {number[][]} queries
 * @return {number[]}
 */
var minimumRelativeLosses = function (prices, queries) {
  prices.sort((a, b) => a - b);

  const n = prices.length;
  const m = queries.length;
  const preSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + prices[i];
  }

  const ans = new Array(m).fill();
  for (let i = 0; i < m; i++) {
    const [k, m] = queries[i];
    const maxLeft = binarySearch(prices, k);
    const maxRight = n - maxLeft;

    let low = Math.max(0, m - maxRight);
    let high = Math.min(maxLeft, m);

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      const right = m - mid;
      if (prices[mid] < 2 * k - prices[n - right]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    const left = high;
    const right = m - left;
    ans[i] = preSum[left] + 2 * k * right - (preSum[n] - preSum[n - right]);
  }

  return ans;
};

function binarySearch(prices, k) {
  let idx = -1;
  let low = 0;
  let high = prices.length;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (prices[mid] <= k) {
      idx = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return idx + 1;
}

```