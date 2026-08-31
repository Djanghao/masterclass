# No CTE, just ROW_NUMBER(), MSSQL

**Author:** DrBorderCollie
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-change-in-global-rankings/solutions/2781708/](https://leetcode.com/problems/the-change-in-global-rankings/solutions/2781708/)

---

```
/* Write your T-SQL query statement below */
SELECT T.team_id
     , T.name
     , ROW_NUMBER()OVER(ORDER BY T.points DESC, T.name ASC) - 
        ROW_NUMBER()OVER(ORDER BY T.points + P.points_change DESC, T.name ASC) AS rank_diff
FROM TeamPoints T LEFT JOIN PointsChange P ON T.team_id = P.team_id;

```