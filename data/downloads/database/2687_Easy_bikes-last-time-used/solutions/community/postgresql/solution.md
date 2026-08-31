# Easy solution using sorting and MAX()

**Author:** elefant1805
**Votes:** 1
**Link:** [https://leetcode.com/problems/bikes-last-time-used/solutions/5102637/](https://leetcode.com/problems/bikes-last-time-used/solutions/5102637/)

---


# Code
```
-- Write your PostgreSQL query statement below
SELECT bike_number, MAX(end_time) AS end_time
FROM Bikes
GROUP BY bike_number
ORDER BY end_time DESC
```