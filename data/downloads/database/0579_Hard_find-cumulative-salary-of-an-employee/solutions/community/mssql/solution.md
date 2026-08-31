# Simple solution using rank and inner join

**Author:** elsah
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/609602/](https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/609602/)

---

```
-- exclude the data with most recent month

with step1 as (
select Id, Month, Salary
from(
 select Id, Month, Salary,
 rank() over(partition by Id order by Month desc) as rank
 from Employee
  ) temp
 where temp.rank > 1
)

select a1.Id, a1.Month, sum(a2.Salary) as Salary
from step1 a1
join step1 a2
on a1.Id = a2.Id 
and a1.Month - a2.Month between 0 and 2
group by a1.Id, a1.Month
order by a1.Id asc, a1.Month desc
```
