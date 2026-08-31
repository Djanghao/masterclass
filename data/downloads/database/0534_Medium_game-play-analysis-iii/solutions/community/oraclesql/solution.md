# 95.57%, window function, oracle

**Author:** Aloha_Bonjour
**Votes:** 1
**Link:** [https://leetcode.com/problems/game-play-analysis-iii/solutions/1471439/](https://leetcode.com/problems/game-play-analysis-iii/solutions/1471439/)

---

```
--cummulative sum/running total
select player_id
    ,to_char(event_date,'YYYY-MM-DD') as event_date
    ,sum(games_played) over (partition by player_id order by event_date) as games_played_so_far
from activity;
```