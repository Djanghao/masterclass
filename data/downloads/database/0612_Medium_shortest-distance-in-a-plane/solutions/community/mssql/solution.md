# [MS SQL Server] Avoid duplicate calculations with ROW_NUMBER

**Author:** hkproj
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/4180826/](https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/4180826/)

---

# Code
```
WITH PointsWithRowNum(x, y, row_num) AS (
    SELECT x, y, ROW_NUMBER() OVER(ORDER BY x, y)
    FROM Point2D
)
SELECT ROUND(MIN(SQRT(POWER((P1.X - P2.X), 2) + POWER((P1.Y - P2.Y), 2))), 2) AS [shortest]
FROM PointsWithRowNum P1
CROSS JOIN PointsWithRowNum P2
WHERE P1.row_num < P2.row_num
```