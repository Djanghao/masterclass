# Easy MS SQL Solution Beats 83.49%. Round, iif, avg, sum

**Author:** Kristina_m
**Votes:** 13
**Link:** [https://leetcode.com/problems/queries-quality-and-percentage/solutions/5558106/](https://leetcode.com/problems/queries-quality-and-percentage/solutions/5558106/)

---

# Code
```
/* Write your T-SQL query statement below */
select query_name, 
round(avg(1.0 * rating / position), 2)
as quality,
round(sum(iif(rating<3, 100.0, 0)) / count(rating), 2)
as poor_query_percentage
from Queries
group by query_name
having query_name is not null;
```


![\u0421\u043D\u0438\u043C\u043E\u043A \u044D\u043A\u0440\u0430\u043D\u0430 2024-07-29 \u0432 12.00.00.png](./images/0.png)
