# Oracle | Join | Case | Sum | Group By

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/league-statistics/solutions/5529451/](https://leetcode.com/problems/league-statistics/solutions/5529451/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your PL/SQL query statement below */
select
    t.team_name,
    count(t.team_name) as matches_played ,
    sum(case
        when t.team_id = m.home_team_id and m.home_team_goals > m.away_team_goals then 3
        when t.team_id = m.away_team_id and m.home_team_goals < m.away_team_goals then 3
        when t.team_id = m.home_team_id and m.home_team_goals = m.away_team_goals then 1
        when t.team_id = m.away_team_id and m.home_team_goals = m.away_team_goals then 1
        else 0
    end) as points ,
    sum(case
        when t.team_id = m.home_team_id then m.home_team_goals
        when t.team_id = m.away_team_id then m.away_team_goals 
        else 0
    end) goal_for, 
    sum(case
        when t.team_id = m.home_team_id then  m.away_team_goals
        when t.team_id = m.away_team_id then  m.home_team_goals
        else 0
    end) goal_against,
    sum(case
        when t.team_id = m.home_team_id then m.home_team_goals
        when t.team_id = m.away_team_id then m.away_team_goals 
        else 0
    end) -
    sum(case
        when t.team_id = m.home_team_id then  m.away_team_goals
        when t.team_id = m.away_team_id then  m.home_team_goals
        else 0
    end) as goal_diff
from
    teams t
join
    matches m on t.team_id in (home_team_id,away_team_id)
group by
    t.team_name 
order by
    3 desc, 6 desc , 1 asc
```