# MySQL recursive for any number of levels in hierarchy

**Author:** mlove
**Votes:** 40
**Link:** [https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/724589/](https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/724589/)

---


```
with recursive cte as
(
select employee_id from employees where manager_id=1 and employee_id!=1
union all
select a.employee_id from employees a join cte b on (b.employee_id=a.manager_id) 
)
select employee_id from cte
```