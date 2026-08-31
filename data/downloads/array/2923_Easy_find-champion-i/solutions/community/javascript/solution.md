# [JavaScript] 2923. Find Champion I

**Author:** pgmreddy
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4250589/](https://leetcode.com/problems/find-champion-i/solutions/4250589/)

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

---

```
var findChampion = function (g) {
  let max = -Infinity
  let max_i

  g.forEach((r, i) => {
    let count = 0
    for (let e of r)
      if (e === 1) {
        count++
      }
    if (count > max) {
      max = count
      max_i = i
    }
  })

  return max_i
};
```

---

Q2 - https://leetcode.com/problems/find-champion-ii/solutions/4250621/javascript-2924-find-champion-ii/comments/2123218/

---
