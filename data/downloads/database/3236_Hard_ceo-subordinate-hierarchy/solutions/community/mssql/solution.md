# Oracle - CONNECT BY | MySQL, Postgres, MSSQL - Recursive CTE

**Author:** adamrbeier
**Votes:** 1
**Link:** [https://leetcode.com/problems/ceo-subordinate-hierarchy/solutions/5554089/](https://leetcode.com/problems/ceo-subordinate-hierarchy/solutions/5554089/)

---

# Intuition

# Approach

# Code
``` Oracle []
SELECT employee_id as subordinate_id,
employee_name as subordinate_name,
LEVEL-1 as hierarchy_level,
salary - CONNECT_BY_ROOT salary as salary_difference
FROM Employees
WHERE LEVEL > 1
start with employee_Id = (select employee_id from Employees where manager_id is null)
CONNECT BY PRIOR employee_id = manager_id
order by 3, 1
```
``` MySQL []
with recursive org_hierarchy(employee_id, employee_name, manager_id, salary, salary_path, org_level) as
(
    select employee_id, employee_name, manager_id, salary,
    CAST(salary as char) as salary_path,
    0 as org_level
    from Employees
    where manager_id is null
    UNION ALL
    select CH.employee_id, CH.employee_name, CH.manager_id, CH.salary,
    CONCAT(P.salary_path,'/',CAST(CH.salary as char)) as salary_path,
    P.org_level + 1
    from org_hierarchy P, Employees CH
    where ch.manager_id = P.employee_id
)
select employee_id as subordinate_id,
employee_name as subordinate_name,
org_level as hierarchy_level,
salary - SUBSTRING(salary_path, 1, POSITION('/' in salary_path) - 1) as salary_difference
from org_hierarchy
where org_level >= 1
order by 3, 1
```
``` MSSQL []
with org_hierarchy
as
(
    select employee_id, employee_name, manager_id, salary,
    CAST(salary as varchar(100)) as salary_path,
    0 as org_level
    from Employees
    where manager_id is null
    UNION ALL
    select CH.employee_id, CH.employee_name, CH.manager_id, CH.salary,
    CAST(CONCAT(P.salary_path,'/',CAST(CH.salary as varchar(100))) as varchar(100)) as salary_path,
    P.org_level + 1
    from org_hierarchy P, Employees CH
    where ch.manager_id = P.employee_id
)
select employee_id as subordinate_id,
employee_name as subordinate_name,
org_level as hierarchy_level,
salary - SUBSTRING(salary_path, 1, CHARINDEX('/', salary_path) - 1) as salary_difference
from org_hierarchy
where org_level >= 1
order by 3, 1
```
``` PostgreSQL []
with recursive org_hierarchy(employee_id, employee_name, manager_id, salary, salary_path, org_level) as
(
    select employee_id, employee_name, manager_id, salary,
    salary::varchar as salary_path,
    0 as org_level
    from Employees
    where manager_id is null
    UNION ALL
    select CH.employee_id, CH.employee_name, CH.manager_id, CH.salary,
    P.salary_path||'/'||CH.salary::varchar as salary_path,
    P.org_level + 1
    from org_hierarchy P, Employees CH
    where ch.manager_id = P.employee_id
)
select employee_id as subordinate_id,
employee_name as subordinate_name,
org_level as hierarchy_level,
salary - split_part(salary_path, '/', 1)::INTEGER as salary_difference
from org_hierarchy
where org_level >= 1
order by 3, 1
```