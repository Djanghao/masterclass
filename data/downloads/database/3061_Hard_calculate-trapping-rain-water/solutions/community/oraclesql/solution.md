# Easy Solution beats 100%

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-trapping-rain-water/solutions/6107707/](https://leetcode.com/problems/calculate-trapping-rain-water/solutions/6107707/)

---

# Intuition & Approach
To calculate the  total amount of trapped rainwater between the bars, we need to follow these steps conceptually:

1. For each bar, calculate the maximum height to its left (`left_max`) and the maximum height to its right (`right_max`).
2. The water trapped above each bar is the minimum of these two maximum heights minus the height of the bar itself.
3. Sum up the water trapped for all bars.

```SQL []
/* Write your PL/SQL query statement below */
with LeftMax as
(select id, height, max(height) over (order by id rows between unbounded preceding and current row) as left_max
from Heights),
    RightMax as
(select id, height, max(height) over (order by id desc rows between unbounded preceding and current row) as right_max
from Heights),
    watertrapped_cte as
(select l.id, l.height, left_max, right_max,
        least(left_max, right_max) - l.height as watertrapped
from LeftMax l join RightMax r
on l.id = r.id
where least(left_max, right_max) - l.height > 0)
select coalesce(sum(watertrapped), 0) as total_trapped_water
from watertrapped_cte;