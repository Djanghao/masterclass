# PostgreSQL Solution

**Author:** raksha18
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-latest-salaries/solutions/5969292/](https://leetcode.com/problems/find-latest-salaries/solutions/5969292/)

---


# Code
```postgresql []
-- Write your PostgreSQL query statement below

with cte_t as (
    select emp_id, max(salary) as salary
from Salary
group by emp_id
order by emp_id asc
) 


select emp_id, firstname, lastname, salary, department_id 
from Salary
where emp_id in (select distinct emp_id from cte_t)
and salary in (select distinct salary from cte_t)
order by emp_id
```