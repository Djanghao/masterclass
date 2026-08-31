# With CTE +  LEFT JOIN

**Author:** MahijaShivani
**Votes:** 0
**Link:** [https://leetcode.com/problems/employees-project-allocation/solutions/5825694/](https://leetcode.com/problems/employees-project-allocation/solutions/5825694/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
first, find the average workload team wise i.e team A and team B
then, filter employees those who has workload greater than the avg workload
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```mysql []
# Write your MySQL query statement below
with cte as(
select 
employee_id,
project_id,
name,
workload,
avg(workload) over(partition by team) as total_avg
from project left join employees 
using(employee_id)
)
select 
employee_id as EMPLOYEE_ID,
project_id AS PROJECT_ID,
name AS EMPLOYEE_NAME,
workload AS PROJECT_WORKLOAD
from cte 
where total_avg < workload
order by 1, 2
```