# Simple Avg window function solution

**Author:** girishcsawant
**Votes:** 0
**Link:** [https://leetcode.com/problems/employees-project-allocation/solutions/5443208/](https://leetcode.com/problems/employees-project-allocation/solutions/5443208/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-- Write your PostgreSQL query statement below
with avg_workload_cte as (
select e.*, p.project_id, p.workload, avg(workload) over(partition by team) as avg_team_workload
from employees e
join Project p on e.employee_id = p.employee_id
)
select c.employee_id, project_id, name as employee_name, workload as project_workload
from avg_workload_cte c
where workload > avg_team_workload
order by c.employee_id asc, project_id asc
```