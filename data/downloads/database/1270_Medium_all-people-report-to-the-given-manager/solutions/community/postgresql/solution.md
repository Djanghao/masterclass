# Recursive CTE

**Author:** alessandrofd
**Votes:** 5
**Link:** [https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/5186131/](https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/5186131/)

---

```
with recursive subordinates as (
    select employee_id 
    from employees 
    where manager_id = 1 and employee_id <> 1
    union
    select employees.employee_id
    from employees
    join subordinates 
        on employees.manager_id = subordinates.employee_id
)

select * from subordinates

```