# Solution using left join

**Author:** elefant1805
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-traveled-distance/solutions/5102622/](https://leetcode.com/problems/total-traveled-distance/solutions/5102622/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT u.user_id, u.name, 
(CASE WHEN SUM(r.distance) != 0 THEN SUM(r.distance)
ELSE 0 END) AS "traveled distance"
FROM Users u
LEFT JOIN Rides r
ON u.user_id = r.user_id
GROUP BY u.user_id, u.name
ORDER BY u.user_id
```