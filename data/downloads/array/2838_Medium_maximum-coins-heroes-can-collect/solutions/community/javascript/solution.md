# Javascript - Sort + PreSum + BinarySearch

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3982426/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3982426/)

---

# Code
```
/**
 * @param {number[]} heroes
 * @param {number[]} monsters
 * @param {number[]} coins
 * @return {number[]}
 */
var maximumCoins = function (heroes, monsters, coins) {
  const n = heroes.length;
  const m = monsters.length;
  const monstersWithCoins = new Array(m).fill();
  for (let i = 0; i < m; i++) {
    monstersWithCoins[i] = [monsters[i], coins[i]];
  }
  monstersWithCoins.sort((a, b) => a[0] - b[0]);

  const preSum = new Array(m).fill(0);
  let sum = 0;
  for (let i = 0; i < m; i++) {
    const [_, coin] = monstersWithCoins[i];
    sum += coin;
    preSum[i] = sum;
  }

  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const idx = binarySearch(monstersWithCoins, heroes[i]);
    if (idx === null) continue;

    ans[i] = preSum[idx];
  }

  return ans;
};

function binarySearch(monstersWithCoins, hero) {
  let idx = null;
  let low = 0;
  let high = monstersWithCoins.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (hero >= monstersWithCoins[mid][0]) {
      idx = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return idx;
}

```