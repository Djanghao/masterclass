# DP + Queue | Modern ES6

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/5974694/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/5974694/)

---

# Queue
```javascript []
var minDays = function (n) {
  const queue = [[n, 0]];
  const visited = new Set([n]);

  while (queue.length) {
    const [orangesLeft, days] = queue.shift();
    if (orangesLeft === 0) return days;

    const daysByEatingOne = orangesLeft - 1
    const daysByEatingHalf = orangesLeft % 2 === 0 ? orangesLeft / 2 : null
    const daysByEatingTwoThirds = orangesLeft % 3 === 0 ? orangesLeft - 2 * (orangesLeft / 3) : null

    for (const next of [daysByEatingOne, daysByEatingHalf, daysByEatingTwoThirds]) {
      if (next !== null && !visited.has(next)) {
        visited.add(next);
        queue.push([next, days + 1]);
      }
    }
  }
};
```

# DP

```js
function minDays(n) {
  const memo = new Map();

  function helper(n) {
    if (n <= 1) return n;
    if (memo.has(n)) return memo.get(n);

    const minDays = Math.min(
      1 + n % 2 + helper(Math.floor(n / 2)),   // eat half if possible
      1 + n % 3 + helper(Math.floor(n / 3))    // eat two-thirds if possible
    );

    memo.set(n, minDays);
    return minDays;
  }

  return helper(n);
}
```