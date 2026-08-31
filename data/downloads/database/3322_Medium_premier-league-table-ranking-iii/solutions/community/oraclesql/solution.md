# Clear oracle solution with CTE and Rank

**Author:** roadytom
**Votes:** 0
**Link:** [https://leetcode.com/problems/premier-league-table-ranking-iii/solutions/5922677/](https://leetcode.com/problems/premier-league-table-ranking-iii/solutions/5922677/)

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
```oraclesql []
/* Write your PL/SQL query statement below */
with cte as (    
    select
        season_id,
        team_id,
        team_name,
        wins*3 + draws*1 as points,
        goals_for-goals_against as goal_difference
    from seasonstats
)
select 
    season_id,
    team_id,
    team_name,
    points,
    goal_difference,
    dense_rank()over (partition by season_id order by points desc, goal_difference desc) as position
from cte
order by season_id, position, team_name


```