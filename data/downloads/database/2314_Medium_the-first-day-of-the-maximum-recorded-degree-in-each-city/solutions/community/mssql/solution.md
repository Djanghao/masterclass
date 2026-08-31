# Derived table with row_number mssql

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/5845592/](https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/5845592/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
SELECT x.city_id
      ,x.day
      ,x.degree
FROM (
SELECT row_number() over (partition by city_id order by degree desc, day) rn
      ,city_id
      ,degree
      ,day
FROM Weather
) x
where rn = 1
order by x.city_id
```