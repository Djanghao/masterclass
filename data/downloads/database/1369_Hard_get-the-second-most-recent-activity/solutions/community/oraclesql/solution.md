# Oracle | rank| Easiest Solution

**Author:** TK-X
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/2409009/](https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/2409009/)

---

```
select username, activity, sd startDate, ed endDate
from(
    select username, activity, to_char(startDate, 'YYYY-MM-DD') sd, to_char(endDate, 'YYYY-MM-DD') ed, rank() over (partition by username order by  endDate desc) rk, count(endDate) over(partition by username ) cnt 
    from UserActivity
)
where cnt = 1 or rk = 2
```