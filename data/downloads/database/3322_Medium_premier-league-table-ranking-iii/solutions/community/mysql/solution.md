# Solution using DENSE_RANK ✨

**Author:** vadlamudinaveen999
**Votes:** 0
**Link:** [https://leetcode.com/problems/premier-league-table-ranking-iii/solutions/6117328/](https://leetcode.com/problems/premier-league-table-ranking-iii/solutions/6117328/)

---

# Intuition
 Used the dense rank function to solve the problem. 

# Code
```mysql []
# Code Author Naveen Kumar Vadlamudi 

SELECT *,
dense_rank() OVER(PARTITION BY t.season_id ORDER BY t.points desc, t.goal_difference desc, t.team_name asc) AS position
FROM
(
    SELECT 
    season_id,
    team_id, 
    team_name,
    (3*wins + 1*draws) as points,
    goals_for - goals_against as goal_difference      
    FROM SeasonStats
) AS t
ORDER BY t.season_id, position ,t.team_name asc



```