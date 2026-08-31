# Solution for all 4 SQL types - dense_rank()

**Author:** adamrbeier
**Votes:** 2
**Link:** [https://leetcode.com/problems/second-highest-salary-ii/solutions/5978843/](https://leetcode.com/problems/second-highest-salary-ii/solutions/5978843/)

---

It should be straightforward that this is a partitioning and ranking problem.  I initially intended to use rank() due to the requirement around ties, but the first example where IT had two employees with a salary of 65000 (the highest salary in the department), with a third employee after that, that alerted me that rank() would not suffice.  The function to use is in the title of this solution - dense_rank() - which does not have gaps in the rank values.  A way to think about this is "second highest distinct salary" but I digress.  Once the ranking function has been identified, there isn't much more to tackle.

# Approach
Expanding on the intro, the problem is a straightforward partition and ranking one - the partitions are the departments, the ordering is by salary (descending).  The dense_rank() function does not skip rank values in the event of ties, with IT in the initial example illustrating dense rank vs. rank very well.  Below is that initial example with dense_rank() and rank() included.

Once the dense_rank() is applied, just select employee id and department where dense_rank() = 2.

| EMP_ID | DEPT      | SALARY | DEPT_SAL_DENSE_RK | DEPT_SAL_RK |
| ------ | --------- | ------ | ----------------- | ----------- |
| 10     | HR        | 55000  | 1                 | 1           |
| 7      | IT        | 65000  | 1                 | 1           |
| 6      | IT        | 65000  | 1                 | 1           |
| 5      | IT        | 55000  | 2                 | 3           |
| 9      | Marketing | 55000  | 1                 | 1           |
| 8      | Marketing | 50000  | 2                 | 2           |
| 4      | Sales     | 90000  | 1                 | 1           |
| 3      | Sales     | 80000  | 2                 | 2           |
| 2      | Sales     | 80000  | 2                 | 2           |
| 1      | Sales     | 70000  | 3                 | 4           |

# Code
```Oracle []
/* Write your PL/SQL query statement below */

with emp_sal_rk as
(
    select emp_id,
    dept,
    dense_rank() over (partition by dept order by salary desc) as dept_sal_rk
    from 
    employees
)
select emp_id,
dept
from emp_sal_rk
where dept_sal_rk = 2
order by 1
```
```MySQL []
# Write your MySQL query statement below

with emp_sal_rk as
(
    select emp_id,
    dept,
    dense_rank() over (partition by dept order by salary desc) as dept_sal_rk
    from 
    employees
)
select emp_id,
dept
from emp_sal_rk
where dept_sal_rk = 2
order by 1
```
```MSSQL []
/* Write your T-SQL query statement below */

with emp_sal_rk as
(
    select emp_id,
    dept,
    dense_rank() over (partition by dept order by salary desc) as dept_sal_rk
    from 
    employees
)
select emp_id,
dept
from emp_sal_rk
where dept_sal_rk = 2
order by 1
```
```Postgres []
-- Write your PostgreSQL query statement below

with emp_sal_rk as
(
    select emp_id,
    dept,
    dense_rank() over (partition by dept order by salary desc) as dept_sal_rk
    from 
    employees
)
select emp_id,
dept
from emp_sal_rk
where dept_sal_rk = 2
order by 1
```