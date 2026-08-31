# One Line

**Author:** khaled-alomari
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6133694/](https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6133694/)

---

# Complexity
- Time complexity:
$$O(log(n))$$

- Space complexity:
$$O(log(n))$$

# Code
```javascript []
const smallestNumber = n =>
    n | parseInt(new Array(Math.ceil(Math.log2(n))).fill(1).join(''), 2);
```
```javascript []
const smallestNumber = (n: number): number =>
    n | parseInt(new Array(Math.ceil(Math.log2(n))).fill(1).join(''), 2);
```