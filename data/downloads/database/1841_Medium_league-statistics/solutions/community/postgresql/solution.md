# Intuitive solution using JOIN only

**Author:** little_explorer
**Votes:** 0
**Link:** [https://leetcode.com/problems/league-statistics/solutions/5933142/](https://leetcode.com/problems/league-statistics/solutions/5933142/)

---

# Intuition
I `join`ed the two tables to get a "full picture" of all the matches each team has played in. 

I used `case when` when calculating the points for each team, whether it was winning, losing, or drawing. 

I utilized `sum` and `filter` when counting the number of for and against goals. I added `coalsece` for the edge case when some teams only played home or away goals, but not both. 

# Approach
See query. 

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```postgresql []
-- Write your PostgreSQL query statement below

select 
  team_name, 
  count(team_id) as matches_played, 
  sum(
    CASE WHEN t.team_id = m.home_team_id 
    AND m.home_team_goals > m.away_team_goals THEN 3 WHEN t.team_id = m.away_team_id 
    AND m.away_team_goals > m.home_team_goals THEN 3 WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END
  ) as points, 
  coalesce(
    sum(home_team_goals) filter (
      where 
        home_team_id = team_id
    ), 
    0
  ) + coalesce(
    sum(away_team_goals) filter (
      where 
        away_team_id = team_id
    ), 
    0
  ) as goal_for, 
  coalesce(
    sum(home_team_goals) filter (
      where 
        away_team_id = team_id
    ), 
    0
  ) + coalesce(
    sum(away_team_goals) filter (
      where 
        home_team_id = team_id
    ), 
    0
  ) as goal_against, 
  coalesce(
    sum(home_team_goals) filter (
      where 
        home_team_id = team_id
    ), 
    0
  ) + coalesce(
    sum(away_team_goals) filter (
      where 
        away_team_id = team_id
    ), 
    0
  ) - coalesce(
    sum(home_team_goals) filter (
      where 
        away_team_id = team_id
    ), 
    0
  ) - coalesce(
    sum(away_team_goals) filter (
      where 
        home_team_id = team_id
    ), 
    0
  ) as goal_diff 
from 
  teams t 
  join matches m on t.team_id in (m.home_team_id, m.away_team_id) 
group by 
  1 
order by 
  points desc, 
  goal_diff desc, 
  team_name asc;
```