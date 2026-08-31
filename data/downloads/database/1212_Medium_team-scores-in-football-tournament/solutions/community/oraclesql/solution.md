# Oracle Easy To Understand Solution | Single Query

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/team-scores-in-football-tournament/solutions/1688500/](https://leetcode.com/problems/team-scores-in-football-tournament/solutions/1688500/)

---

```
/*
team_id, team_name, sum(points ) 
(
    team_id, team_name, points 
    teams left join matches   on host_team = team_id
    union all 
    team_id, team_name, points 
    teams left join matches on guest_team = team_id
)
*/

select team_id, team_name, 
        sum(nvl(case 
        when  a.team_id = b.host_team and a.team_id <> b.guest_team and host_goals > guest_goals then 3 
        when  a.team_id = b.host_team and a.team_id <> b.guest_team and host_goals = guest_goals then 1 
        when  a.team_id = b.guest_team and a.team_id <> b.host_team and guest_goals > host_goals then 3 
        when  a.team_id = b.guest_team and a.team_id <> b.host_team and guest_goals = host_goals then 1
            else 0
        end, 0)) num_points  
from 
teams a left join matches b on a.team_id = b.host_team or a.team_id = b.guest_team 
group by team_id, team_name
order by 3 desc, 1 asc
```