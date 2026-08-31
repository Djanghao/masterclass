# Simple BFS

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/6122761/](https://leetcode.com/problems/stepping-numbers/solutions/6122761/)

---

```javascript []
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var countSteppingNumbers = function (low, high) {
  const result = new Set();
  const queue = [0];

  while (queue.length) {
    const num = queue.shift();
    if (num >= low && num <= high) result.add(num);
    if (num > high) continue;

    const last = num % 10;
    if (num === 0) {
      for (let i = 1; i < 10; i++) queue.push(i);
      continue;
    }

    if (last > 0) queue.push(num * 10 + last - 1);
    if (last < 9) queue.push(num * 10 + last + 1);
  }

  return Array.from(result).sort((a, b) => a - b);
};
```