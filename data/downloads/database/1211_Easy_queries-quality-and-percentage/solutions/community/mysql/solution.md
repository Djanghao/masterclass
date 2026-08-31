# SQL ✅ |ROUND, AVG, SUM ✅✅✅| Easy to understand

**Author:** jasurbekaktamov081
**Votes:** 395
**Link:** [https://leetcode.com/problems/queries-quality-and-percentage/solutions/3811567/](https://leetcode.com/problems/queries-quality-and-percentage/solutions/3811567/)

---


![image.png](./images/0.png)

# Code
```
select
query_name,
round(avg(cast(rating as decimal) / position), 2) as quality,
round(sum(case when rating < 3 then 1 else 0 end) * 100 / count(*), 2) as poor_query_percentage
from
queries
group by
query_name;
```