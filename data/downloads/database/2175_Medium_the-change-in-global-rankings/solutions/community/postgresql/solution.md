# easy one cte resolves the question

**Author:** Yahui_Zhao
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-change-in-global-rankings/solutions/5867265/](https://leetcode.com/problems/the-change-in-global-rankings/solutions/5867265/)

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
```postgresql []
-- Write your PostgreSQL query statement below
with cte as (
select t.team_id, name,
rank() over(order by points desc, name) as rn,
(points + points_change) as new_points
from teampoints t join pointschange p
on t.team_id = p.team_id
)
SELECT
    team_id,
    name,
    (rn- rank() OVER (ORDER BY new_points DESC, name)) AS rank_diff
FROM cte

```