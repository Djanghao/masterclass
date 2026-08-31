# PostgreSQL: using to_char with fill mode prefix

**Author:** alek_leetc
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-date-format/solutions/5095282/](https://leetcode.com/problems/convert-date-format/solutions/5095282/)

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
-- Write your PostgreSQL query statement below
select to_char(day, 'FMDay, FMMonth FMDD, YYYY') as day
from Days
```