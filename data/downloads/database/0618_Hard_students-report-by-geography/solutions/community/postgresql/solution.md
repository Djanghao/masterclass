# Postgres : Get The row number and do self joins

**Author:** anuraganand789
**Votes:** 1
**Link:** [https://leetcode.com/problems/students-report-by-geography/solutions/5305910/](https://leetcode.com/problems/students-report-by-geography/solutions/5305910/)

---

# Code
```
-- Write your PostgreSQL query statement below

with
AA as (
  select *, row_number() over(partition by continent order by name) from student
)

select
  a1.name as "America"
  ,
  a2.name as "Asia"
  ,
  a3.name as "Europe"
 from 
  AA a1 
  left join AA a2 on a1.row_number = a2.row_number and a2.continent = 'Asia'
  left join AA a3 on a1.row_number = a3.row_number and a3.continent = 'Europe'
where
  a1.continent = 'America' --and a2.continent = 'Asia' and a3.continent = 'Europe'


```