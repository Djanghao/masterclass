# PostgreSQL solution with MAX, MIN, +

**Author:** yukikitayama
**Votes:** 1
**Link:** [https://leetcode.com/problems/class-performance/solutions/5065336/](https://leetcode.com/problems/class-performance/solutions/5065336/)

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
select
  max(assignment1 + assignment2 + assignment3) - min(assignment1 + assignment2 + assignment3) as difference_in_score
from
  scores
;

```