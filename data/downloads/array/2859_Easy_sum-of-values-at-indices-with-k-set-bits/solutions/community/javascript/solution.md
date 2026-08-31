# [JavaScript] 2859. Sum of Values at Indices With K Set Bits

**Author:** pgmreddy
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4055060/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4055060/)

---

---

Weekly Contest 363
- Q1. See below
- Q2. https://leetcode.com/problems/happy-students/solutions/4055050/javascript-2860-happy-students/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```
var sumIndicesWithKSetBits = function (a, k) {
  let n = a.length

  let sum = 0
  for (let i = 0; i < n; i++) {
    let iBnryStrWoZ = i
      .toString(2) // binary
      .replaceAll('0', '') // without 0s
    if (iBnryStrWoZ.length === k) {
      sum += a[i]
    }
  }
  return sum
}
```

---

Weekly Contest 363
- Q1. See above
- Q2. https://leetcode.com/problems/happy-students/solutions/4055050/javascript-2860-happy-students/

---
