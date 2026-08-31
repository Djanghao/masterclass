# using multiple window functions

**Author:** ahsanpz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-expensive-cities/solutions/5576958/](https://leetcode.com/problems/find-expensive-cities/solutions/5576958/)

---

# Code
```
/* Write your PL/SQL query statement below */
select  distinct city
from
(select city, AVG(price)over(partition by city) avg_city, AVG(price)over() avg_tot
from listings)
where avg_city > avg_tot
```