# PostgreSQL solution

**Author:** vm2020
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/6028204/](https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/6028204/)

---



# Code
```postgresql []
-- Write your PostgreSQL query statement below

with cte as (
select a.id, a.month, dense_rank() over (partition by a.id order by a.month desc ) as rn,  sum(b.salary) as Salary from 
Employee a left join Employee b on 
a.id = b.id 
and b.month  in ( a.month , a.month -1 ,  a.month - 2)
group by 1, 2)

select id, month, Salary from cte where rn > 1 
order by 1, 2 desc;

```