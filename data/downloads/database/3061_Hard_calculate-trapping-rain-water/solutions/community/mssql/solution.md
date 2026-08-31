# max() and iif()

**Author:** newbie919
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-trapping-rain-water/solutions/5324722/](https://leetcode.com/problems/calculate-trapping-rain-water/solutions/5324722/)

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
/* Write your T-SQL query statement below */
with cte as (
    select id, height,
    max(height) over (order by id) as leftmax,
    max(height) over (order by id desc) as rightmax
    from heights
)

select sum(iif(leftmax<rightmax, leftmax, rightmax)-height) as total_trapped_water
from cte



```