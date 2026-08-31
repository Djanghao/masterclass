# Having MSSQL

**Author:** DE_Sam
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-expensive-cities/solutions/5686195/](https://leetcode.com/problems/find-expensive-cities/solutions/5686195/)

---

# Approach
avg(price) grouped by city > population average price


# Code
```mssql []
/* Write your T-SQL query statement below */

SELECT city
FROM Listings
group by city
having avg(price) > (SELECT avg(price) avg_price FROM Listings)
```