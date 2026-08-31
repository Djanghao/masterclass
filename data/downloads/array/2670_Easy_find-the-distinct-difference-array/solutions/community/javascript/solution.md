# [JavaScript] 2670. Find the Distinct Difference Array

**Author:** pgmreddy
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3495901/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3495901/)

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
const distinctDifferenceArray = function (a) {
  const n = a.length
  const pre = new Array(n) // prefix counts
  const suf = new Array(n) // suffix counts
  let set

  set = new Set()
  for (let i = 0; i < n; i++) {
    set.add(a[i])
    pre[i] = set.size
  }

  set = new Set()
  for (let i = n - 1; i >= 0; i--) {
    suf[i] = set.size
    set.add(a[i])
  }

  const an = new Array(n)
  for (let i = 0; i < n; i++) {
    an[i] = pre[i] - suf[i]
  }
  return an
}
```
