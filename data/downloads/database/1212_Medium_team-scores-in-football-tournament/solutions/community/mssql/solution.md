# Most Straightforward SQL Server Solution

**Author:** nathan-mohapatra
**Votes:** 1
**Link:** [https://leetcode.com/problems/team-scores-in-football-tournament/solutions/4132600/](https://leetcode.com/problems/team-scores-in-football-tournament/solutions/4132600/)

---

# Code
```
/* Write your T-SQL query statement below */
SELECT
  T.*,
  SUM(
    CASE
      WHEN T.team_id = host_team AND host_goals > guest_goals THEN 3
      WHEN T.team_id = guest_team AND guest_goals > host_goals THEN 3
      WHEN host_goals = guest_goals THEN 1
      ELSE 0
    END 
  ) AS num_points
FROM Teams T
  LEFT JOIN Matches M
    ON T.team_id = M.host_team OR T.team_id = M.guest_team
GROUP BY T.team_id, T.team_name
ORDER BY 3 DESC, T.team_id ASC
```