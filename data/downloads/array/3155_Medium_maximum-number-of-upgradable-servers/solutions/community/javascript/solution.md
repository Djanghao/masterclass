# Javascript - Binary Search

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5186385/](https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5186385/)

---

# Code
```
/**
 * @param {number[]} count
 * @param {number[]} upgrade
 * @param {number[]} sell
 * @param {number[]} money
 * @return {number[]}
 */
var maxUpgrades = function (count, upgrade, sell, money) {
  const n = count.length;
  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    ans[i] = binarySearch(count[i], upgrade[i], sell[i], money[i]);
  }

  return ans;
};

function binarySearch(currCount, currUpgrade, currSell, currMoney) {
  let result = 0;
  let low = 0;
  let high = currCount;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const totalCost = mid * currUpgrade;
    const totalMoney = currMoney + (currCount - mid) * currSell;
    if (totalMoney >= totalCost) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

```