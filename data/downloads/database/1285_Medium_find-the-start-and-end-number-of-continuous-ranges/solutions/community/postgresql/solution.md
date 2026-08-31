# SUPER EASY SOLUTION, BEATS 90% USERS !!

**Author:** ravishankar324
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/solutions/5632833/](https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/solutions/5632833/)

---



# Code
```
-- Write your PostgreSQL query statement below
WITH CTE1 AS (SELECT log_id, log_id - ROW_NUMBER() OVER(ORDER BY log_id) AS rk
FROM Logs)

SELECT min(log_id) AS start_id, MAX(log_id) AS end_id
FROm CTE1
GROUP BY rk
ORDER BY start_id
```