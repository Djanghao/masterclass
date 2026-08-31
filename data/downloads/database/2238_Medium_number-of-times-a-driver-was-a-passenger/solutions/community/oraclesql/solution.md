# oracle with+ join sample solution

**Author:** loco_fung
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/3067136/](https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/3067136/)

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
with all_drivers as (
select distinct driver_id 
from rides
)
select a.driver_id , count(distinct b.ride_id) cnt
from all_drivers a 
left join rides  b on a.driver_id = passenger_id
group by a.driver_id

```