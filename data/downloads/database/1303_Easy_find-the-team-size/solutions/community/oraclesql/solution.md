# Oracle solution easy to understand

**Author:** psonlinux
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-team-size/solutions/1198049/](https://leetcode.com/problems/find-the-team-size/solutions/1198049/)

---


```
select employee.employee_id, team.team_size
from employee
left join (
    select team_id, count(employee_id) as team_size
    from employee
    group by team_id
)  team
on employee.team_id = team.team_id;
```