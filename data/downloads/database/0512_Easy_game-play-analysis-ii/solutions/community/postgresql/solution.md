# Postgres with inner join

**Author:** subtleknife
**Votes:** 1
**Link:** [https://leetcode.com/problems/game-play-analysis-ii/solutions/5176337/](https://leetcode.com/problems/game-play-analysis-ii/solutions/5176337/)

---



# Code
```
-- Write your PostgreSQL query statement below
select a.player_id, a.device_id
from Activity a
join (
    select player_id, min(event_date) min_event_date
    from Activity
    group by player_id
) as first_login
on first_login.player_id = a.player_id
and a.event_date = first_login.min_event_date
```