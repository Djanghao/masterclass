# Line Sweep | Modern ES6

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/5923167/](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/5923167/)

---

# Code
```javascript []
const meetRequirement = (n, lights, requirement) => {
  const lines = new Array(n + 1).fill(0);

  for (const [pos, range] of lights) {
    lines[Math.max(0, pos - range)]++
    lines[Math.min(n - 1, pos + range) + 1]--
  }

  return lines.reduce((acc, curr, i) => {
    acc.sum += curr;
    if (acc.sum >= requirement[i]) acc.count++;
    return acc;
  }, { sum: 0, count: 0 }).count;
};
```