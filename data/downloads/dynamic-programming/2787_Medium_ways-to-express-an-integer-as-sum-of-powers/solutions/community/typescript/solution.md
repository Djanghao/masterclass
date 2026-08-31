# Dynamic Programmining in Javascript/Typescript (beats 95%)

**Author:** wentland
**Votes:** 1
**Link:** [https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/4023924/](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/4023924/)

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const numberOfWays = (n: number, x: number): number => {
  const numWays = new Array(n + 1).fill(0);
  numWays[0] = 1;

  for (let max = 1; max <= n; max++) {
    const powed = max ** x;
    if (powed > n) break;
    for (let target = n; target >= powed; target--) {
      numWays[target] += numWays[target - powed];
      numWays[target] %= 10 ** 9 + 7;
    }
  }

  return numWays[n];
};

```