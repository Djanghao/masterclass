# PostgreSQL solution using CTE and JOIN

**Author:** user8192Cs
**Votes:** 1
**Link:** [https://leetcode.com/problems/game-play-analysis-v/solutions/5028391/](https://leetcode.com/problems/game-play-analysis-v/solutions/5028391/)

---


# Code
```
-- Write your PostgreSQL query statement below

WITH install_dates AS (
    SELECT 
        player_id,
        MIN(event_date) AS install_date
    FROM activity
    GROUP BY player_id
)

SELECT 
    i.install_date AS install_dt,
    COUNT(i.install_date) AS installs,
    ROUND(COUNT(a.player_id)/COUNT(i.player_id)::numeric, 2) AS Day1_retention
FROM activity AS a
RIGHT JOIN install_dates AS i
ON (a.event_date = i.install_date+1
    AND a.player_id = i.player_id)
GROUP BY i.install_date
ORDER BY install_dt

```