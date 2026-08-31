# Clean Solutions to 1077.  ||  MAX, DENSE_RANK

**Author:** ztt_09
**Votes:** 1
**Link:** [https://leetcode.com/problems/project-employees-iii/solutions/5638601/](https://leetcode.com/problems/project-employees-iii/solutions/5638601/)

---

## Sol #1: MAX
```
select project_id, p.employee_id
from project p left join employee e on p.employee_id = e.employee_id
where (project_id, experience_years) in (select project_id, max(experience_years)
from project p left join employee e on p.employee_id = e.employee_id
group by project_id)
```

## Sol #2: DENSE_RANK
```
select project_id, employee_id
from(select p.project_id, p.employee_id, dense_rank() over (partition by project_id order by experience_years DESC) as rank
from project p left join employee e on p.employee_id = e.employee_id)
where rank = 1
```