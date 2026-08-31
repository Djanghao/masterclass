# [JavaScript] 2766. Relocate Marbles

**Author:** pgmreddy
**Votes:** 10
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/3737501/](https://leetcode.com/problems/relocate-marbles/solutions/3737501/)

---

**Biweekly Contest 108 answers:**
- Q1
  - https://leetcode.com/problems/longest-alternating-subarray/solutions/3737537/javascript-2765-longest-alternating-subarray/
- Q2
  - https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737527/javascript-partition-string-into-minimum-beautiful-substrings/
- Q3
  - https://leetcode.com/problems/relocate-marbles/solutions/3737501/javascript-2766-relocate-marbles/

===

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
var relocateMarbles = function (a, f, t) {
  let set = new Set(a)
  for (let i = 0; i < f.length; i++) {
    let fr = f[i]
    let to = t[i]
    set.delete(fr)
    set.add(to)
  }
  return [...set].sort((a, b) => a - b)
}

```