# Simple Filtering

**Author:** elefant1805
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-the-matches-of-the-league/solutions/5107385/](https://leetcode.com/problems/all-the-matches-of-the-league/solutions/5107385/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT t1.team_name AS home_team, t2.team_name AS away_team
FROM Teams t1, Teams t2
WHERE t1.team_name != t2.team_name
```