# 3 Simple MySQL Solutions

**Author:** pacman26
**Votes:** 16
**Link:** [https://leetcode.com/problems/team-scores-in-football-tournament/solutions/399282/](https://leetcode.com/problems/team-scores-in-football-tournament/solutions/399282/)

---

```
--Method 1: brute force: calculate the goals scored by host and guest teams separately (in 2 different queries) and combine them using a join

select host.team_id, host.team_name, sum(host.num_points + guest.num_points) as 'num_points' from
(select t.team_id, t.team_name,
SUM(case when host_goals > guest_goals then 3 when host_goals = guest_goals then 1 else 0 end) as 'num_points'
from teams t
left join matches m
on t.team_id = m.host_team
group by 1, 2) as host
join
(select t.team_id, t.team_name,
SUM(case when guest_goals > host_goals then 3 when host_goals = guest_goals then 1 else 0 end) as 'num_points'
from teams t
left join matches m
on t.team_id = m.guest_team
group by 1, 2) as guest
on host.team_id = guest.team_id
group by host.team_id, 2
order by num_points desc, team_id asc;


--Method 2: More elegant solution: group the team id with host team or guest team and add the goals to each team based on the appropriate filters

select team_id, team_name,
sum(case when team_id = host_team and host_goals > guest_goals then 3 else 0 end) +
sum(case when team_id = guest_team and guest_goals > host_goals then 3 else 0 end) +
sum(case when team_id = host_team and host_goals = guest_goals then 1 else 0 end) +
sum(case when team_id = guest_team and host_goals = guest_goals then 1 else 0 end)
as 'num_points'
from teams
left join matches
on team_id = host_team
or team_id = guest_team
group by team_id, team_name
order by num_points desc, team_id asc;


--Method 3: Taken from LC discussions: similar to my method 1, but using union all

select t.team_id, t.team_name, ifnull(sum(sub.team_points),0) as num_points
from teams t
left join
((select host_team as team,
        case when host_goals > guest_goals then 3
            when host_goals = guest_goals then 1
            else 0 end as team_points
  from matches)
 union all
(select guest_team as team,
        case when host_goals < guest_goals then 3
            when host_goals = guest_goals then 1
            else 0 end as team_points
 from matches))sub
on t.team_id = sub.team
group by t.team_id
order by 3 desc, 1
```