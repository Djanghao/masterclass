# MYSQL : WITH multiple CTEs + CASE statements + SUM() + COUNT(). Good Luck 👍✨

**Author:** ashlyjoseph
**Votes:** 5
**Link:** [https://leetcode.com/problems/league-statistics/solutions/2490826/](https://leetcode.com/problems/league-statistics/solutions/2490826/)

---

```
# Write your MySQL query statement below

/**
TWO tables Teams/Matches
team_id is the primary key of Teams table
(home_team_id, away_team_id) is the primary key for Matches table
Report the statistics of the league
winning team gets three points and the losing team gets no points
If a match ends with a draw, both teams get one point
 team_name | matches_played | points | goal_for | goal_against | goal_diff
ORDER by points desc, goal_diff desc, team_name asc

STEPS

Build CTE for both home_team and away_team and assign points with CASE statement
Meaning home_team and away team together under team_id,points, goals_for, goals_against
in next CTE Join both home and awy tables
count the team id as total matches, sum the points , sum the goal_for , sum the goal_against and take the difference. Join with the match tables and group by team_id
order by 

*/
WITH home_team AS
(
SELECT
    
    home_team_id AS team_id,
    CASE WHEN home_team_goals > away_team_goals THEN 3 
         WHEN home_team_goals = away_team_goals THEN 1
         ELSE 0 END AS points,
    home_team_goals AS goal_for,
    away_team_goals AS goal_against
    
FROM Matches
),
away_team AS
(
SELECT
    
   away_team_id AS team_id,
    CASE WHEN home_team_goals > away_team_goals THEN 0 
         WHEN home_team_goals = away_team_goals THEN 1
         ELSE 3 END AS points,
    away_team_goals AS goal_for,
    home_team_goals AS goal_against
    
FROM Matches
),

total_team AS
(
SELECT * FROM home_team
UNION ALL
SELECT * FROM away_team
)

SELECT
        team_name,
        COUNT(TT.team_id) AS matches_played,
        SUM(TT.points) AS points,
        SUM(TT.goal_for) AS goal_for,
        SUM(TT.goal_against) AS goal_against,
        SUM(TT.goal_for) - SUM(TT.goal_against) AS goal_diff
FROM total_team TT
 JOIN Teams T
ON TT.team_id = T.team_id
GROUP BY team_name
ORDER BY points DESC, goal_diff DESC, team_name ASC


```
