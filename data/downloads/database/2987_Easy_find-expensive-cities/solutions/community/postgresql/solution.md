# Easy solution using aggregates

**Author:** elefant1805
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-expensive-cities/solutions/5102537/](https://leetcode.com/problems/find-expensive-cities/solutions/5102537/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT city FROM Listings
GROUP BY city
HAVING AVG(price) > (SELECT AVG(price) FROM Listings)
ORDER BY city
```