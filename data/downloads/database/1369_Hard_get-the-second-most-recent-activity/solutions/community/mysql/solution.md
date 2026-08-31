# [MySQL] Easy solution with rank and count functions (93.20% faster)

**Author:** prsfnc
**Votes:** 6
**Link:** [https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/2011659/](https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/2011659/)

---

```
with cte as (
    select
        *,
        rank() over(partition by username order by endDate desc) as rank_activity,
        count(*) over(partition by username) as num_activity
    from UserActivity
)
select username, activity, startDate, endDate
from cte
where rank_activity = 2 or num_activity = 1
```