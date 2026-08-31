# Simple Approach using SELF JOIN

**Author:** nireddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/rectangles-area/solutions/5609678/](https://leetcode.com/problems/rectangles-area/solutions/5609678/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT
    p1.id AS "P1",
    p2.id AS "P2",
    ABS(p2.x_value - p1.x_value) * ABS(p2.y_value-p1.y_value) AS "AREA"
FROM
    Points p1
    JOIN
    Points p2
    ON p1.id < p2.id AND p1.x_value != p2.x_value AND p1.y_value != p2.y_value
ORDER BY
    "AREA" DESC, "P1", "P2"
```