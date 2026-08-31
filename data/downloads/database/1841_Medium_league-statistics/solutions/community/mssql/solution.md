# Beats 80% of Users - Step by Step with UNION ALL

**Author:** Vinaygt
**Votes:** 1
**Link:** [https://leetcode.com/problems/league-statistics/solutions/4436220/](https://leetcode.com/problems/league-statistics/solutions/4436220/)

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
/* Write your T-SQL query statement below */
WITH get_complete_details AS(
SELECT
    home_team_id,
    COUNT(*) AS matches_played,
    SUM(home_team_goals) AS goal_for,
    SUM(away_team_goals) AS goal_against,
    SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) AS won_matches,
    SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS draw_matches
FROM Matches 
GROUP BY home_team_id
UNION ALL
SELECT
    away_team_id ,
    COUNT(*) AS matches_played,
    SUM(away_team_goals ) AS goal_for,
    SUM(home_team_goals) AS goal_against,
    SUM(CASE WHEN away_team_goals > home_team_goals  THEN 1 ELSE 0 END) AS won_matches,
    SUM(CASE WHEN away_team_goals = home_team_goals  THEN 1 ELSE 0 END) AS draw_matches
FROM Matches 
GROUP BY away_team_id),
get_total_matches_data AS(
SELECT
    home_team_id AS a_team_id,
    SUM(matches_played) AS matches_played,
    SUM(goal_for) AS goal_for,
    SUM(goal_against) AS goal_against,
    SUM(won_matches) AS won_matches,
    SUM(draw_matches) AS draw_matches 
FROM get_complete_details
GROUP BY home_team_id),
get_draw_win_points AS(
SELECT
    a_team_id,
    matches_played,
    goal_for,
    goal_against,
    B.team_name,
    CASE WHEN draw_matches > 0 THEN draw_matches * 1 ELSE draw_matches END AS draw_points,
    CASE WHEN won_matches  > 0 THEN won_matches * 3 ELSE won_matches END AS won_points
FROM get_total_matches_data A LEFT JOIN Teams B ON A.a_team_id  = B.team_id)
SELECT
    team_name,
    matches_played,
    draw_points + won_points AS points,
    goal_for,
    goal_against,
    goal_for - goal_against AS goal_diff 
FROM get_draw_win_points
ORDER BY points DESC, goal_diff DESC, team_name


```