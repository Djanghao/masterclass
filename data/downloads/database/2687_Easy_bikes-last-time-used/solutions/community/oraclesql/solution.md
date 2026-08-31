# Oracle | Max | Group By

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/bikes-last-time-used/solutions/5347746/](https://leetcode.com/problems/bikes-last-time-used/solutions/5347746/)

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
/* Write your PL/SQL query statement below */
select
    bike_number,
    max(end_time) as end_time
from
    bikes
group by
    bike_number
order by
    2 desc
```