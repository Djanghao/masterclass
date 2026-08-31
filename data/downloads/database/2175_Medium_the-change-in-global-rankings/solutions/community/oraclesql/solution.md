# Oracle clear solution easy to understand

**Author:** selim54
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-change-in-global-rankings/solutions/1792913/](https://leetcode.com/problems/the-change-in-global-rankings/solutions/1792913/)

---

```
with cte as
(
    select 
        t.team_id,
        t.name,
        t.points+p.points_change tot_point,
        rank() over(order by t.points desc, name asc) rnk
    from 
        teampoints t 
        join pointschange p on p.team_id = t.team_id   
),
cte1 as
(
    select 
        team_id, 
        name,
        rank() over(order by tot_point desc, name asc) rnk2,
        rnk
    from cte
)

select 
    team_id,
    name,
    rnk-rnk2 rank_diff
from cte1
```