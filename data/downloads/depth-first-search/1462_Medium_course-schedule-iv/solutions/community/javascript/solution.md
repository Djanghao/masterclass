# [JavaScript] 1462. Course Schedule IV

**Author:** pgmreddy
**Votes:** 2
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/3825317/](https://leetcode.com/problems/course-schedule-iv/solutions/3825317/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

```
if
  prev is connected to mid
    and
  mid is connected to next
        prev -> mid -> next
then
  connect prev to next
        prev -> next

for all mids
    for all prevs
        for all nexts
            do above

===
for each query
    return if u & v  are connected
        u -> u
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```
var checkIfPrerequisite = function (n, pres, qs) {
  let g = Array.from({ length: n }, () => new Array(n).fill(0))
  for (let [u, v] of pres) {
    g[u][v] = 1
  }

  for (let mid = 0; mid < n; mid++) {
    for (let u = 0; u < n; u++) {
      for (let v = 0; v < n; v++) {
        if (g[u][mid] && g[mid][v]) {
          g[u][v] = 1
        }
      }
    }
  }

  let an = []
  for (let [u, v] of qs) {
    an.push(g[u][v])
  }
  return an
};
```
