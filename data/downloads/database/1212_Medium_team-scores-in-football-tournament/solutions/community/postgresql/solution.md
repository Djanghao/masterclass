# Simple clean solution to 1212.  ||  Beats 100%  ||  CASE, SUM

**Author:** ztt_09
**Votes:** 1
**Link:** [https://leetcode.com/problems/team-scores-in-football-tournament/solutions/5601287/](https://leetcode.com/problems/team-scores-in-football-tournament/solutions/5601287/)

---

## Approach
Seperate the match and points awarded into two conditions:
1. When the team is the **host**
2. When the team is the **guest**  

For each condition, follow the given points-award rules we got three conditions:
1. team 1 > team 2 `team 1: 3 points,   team 2: 0 points`
2. team 1 < team 2 `team 1: 0 points,   team 2: 3 points`
3. team 1 = team 2 `team 1: 1 points,   team 2: 1 points`

Combined both, we could summarize a total of 4 conditions for the **select**:
1. team `host`, team `> guest`, team `3 points`
2. team `guest`, team `> host`, team `3 points`
3. team `host | guest`, team `= host | guest`, team `1 points`
4. else team `0 points`


## Sol
```
-- Write your PostgreSQL query statement below
select team_id, team_name, 
sum(case when team_id=m.host_team and m.host_goals>m.guest_goals then 3 
         when team_id=m.host_team and m.host_goals=m.guest_goals then 1 
         when team_id=m.guest_team and m.host_goals<m.guest_goals then 3 
         when team_id=m.guest_team and m.host_goals=m.guest_goals then 1 
         else 0 end) as num_points
from teams t, matches m
group by team_id, team_name
order by num_points DESC, team_id


```

___

\u2B06\uFE0F\u2B06\uFE0F Please upvote if you find this Solution helpful \u2B06\uFE0F\u2B06\uFE0F

![PussInBootsShrekGIF.gif](./images/0.gif)