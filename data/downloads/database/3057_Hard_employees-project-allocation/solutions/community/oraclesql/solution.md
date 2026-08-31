# Simple solution with CTE

**Author:** avinash2196
**Votes:** 1
**Link:** [https://leetcode.com/problems/employees-project-allocation/solutions/5799871/](https://leetcode.com/problems/employees-project-allocation/solutions/5799871/)

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
```oraclesql []
/* Write your PL/SQL query statement below */
with Team_load as (
                        Select  a.employee_id,
                                a.name,
                                a.team,
                                b.project_id,
                                b.workload,
                                avg(b.workload) over (partition by a.team) as project_load
                        from employees a join project b
                             on a.employee_id = b.employee_id 
                   )
select  employee_id,
        project_id,
        name as employee_name,
        workload as project_workload
from team_load                   
where workload > project_load  
order by employee_id, project_id
```