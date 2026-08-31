# Three straightforward solutions (window function & subquery)

**Author:** olivia612
**Votes:** 55
**Link:** [https://leetcode.com/problems/project-employees-iii/solutions/369363/](https://leetcode.com/problems/project-employees-iii/solutions/369363/)

---

MSSQL solution using Window Function. Runtime: 1098 ms

```
select t.project_id, t.employee_id
from
    (select project_id,
    p.employee_id,
    rank() over(partition by project_id order by experience_years desc) as rank
    from Project p join Employee e
    on p.employee_id = e.employee_id) t
where t.rank = 1;
```

MSSQL solution using With function instead of sub-query.
```
with employee_experience as (
    select p.project_id, p.employee_id,
    rank() over(partition by p.project_id order by experience_years desc) as rank
    from Project p join Employee e
    on p.employee_id = e.employee_id)

select project_id, employee_id
from employee_experience
where rank = 1;
```

MySQL solution using subquery. Runtime: 278 ms
```
select p.project_id, p.employee_id
from Project p join Employee e
on p.employee_id = e.employee_id
where (p.project_id, e.experience_years) in (
    select a.project_id, max(b.experience_years)
    from Project a join Employee b
    on a.employee_id = b.employee_id
    group by a.project_id);
```