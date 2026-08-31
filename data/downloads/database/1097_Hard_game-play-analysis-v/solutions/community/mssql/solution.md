# Very simple intuitive answer

**Author:** akhil1311
**Votes:** 3
**Link:** [https://leetcode.com/problems/game-play-analysis-v/solutions/761366/](https://leetcode.com/problems/game-play-analysis-v/solutions/761366/)

---

```
/* Write your T-SQL query statement below */
with install_dates as (
    select
    player_id,
    min(event_date) as install_date
    from activity a1
    group by player_id
)

select
id.install_date as install_dt,
count(id.player_id) as installs,
round(cast(count(a.player_id) as float)/count(id.player_id), 2) as Day1_retention
from install_dates id left join activity a
on id.player_id = a.player_id
and dateadd(day, 1, id.install_date) = a.event_date
group by id.install_date
;
```