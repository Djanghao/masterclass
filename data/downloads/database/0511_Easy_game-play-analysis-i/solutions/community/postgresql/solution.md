# PostgreSQL: Aggregating and Grouping

**Author:** d_sushkov
**Votes:** 13
**Link:** [https://leetcode.com/problems/game-play-analysis-i/solutions/5647895/](https://leetcode.com/problems/game-play-analysis-i/solutions/5647895/)

---

# Code
```
-- Write your PostgreSQL query statement below
SELECT player_id, MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id;
```