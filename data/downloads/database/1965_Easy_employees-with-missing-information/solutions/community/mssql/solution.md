# simple solution(MSSQL)

**Author:** naveen_2026
**Votes:** 18
**Link:** [https://leetcode.com/problems/employees-with-missing-information/solutions/1930265/](https://leetcode.com/problems/employees-with-missing-information/solutions/1930265/)

---

1.
```
select employee_id from employees
union
select employee_id from salaries
except
select employee_id from employees
intersect 
select employee_id from salaries
```
union of two tables minus intersection

union 1 2 4 5
intersection 4 5 
union - intersection =1 2

2.
```
select employee_id from employees
where employee_id not in (select employee_id from Salaries)
union
select employee_id from Salaries
where employee_id not in (select employee_id from Employees)
```
please upvote if you find it useful