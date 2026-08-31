# [JavaScript] 2856. Minimum Array Length After Pair Removals

**Author:** pgmreddy
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4055165/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4055165/)

---

---

Biweekly Contest 113
- Q1. https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4055168/javascript-2855-minimum-right-shifts-to-sort-the-array/
- Q2. See below

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
var minLengthAfterRemovals = function (a) {
  let n = a.length

  let count = 0
  let half = Math.trunc(n / 2)
  for (let i = 0, j = half; i < half && j < n; ) {
    let L = a[i] // left = start to mid
    let R = a[j] // right = mid to end

    if (L < R) {
      i++
      j++
      count += 2 // two elements matched - to be removed
    } else {
      j++
    }
  }
  return n - count // remaining elements
}
```

---

Biweekly Contest 113
- Q1. https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4055168/javascript-2855-minimum-right-shifts-to-sort-the-array/
- Q2. See above

---
