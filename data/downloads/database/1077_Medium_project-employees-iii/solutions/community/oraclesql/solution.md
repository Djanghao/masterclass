# Solution without Window function

**Author:** Soni5143
**Votes:** 1
**Link:** [https://leetcode.com/problems/project-employees-iii/solutions/3840399/](https://leetcode.com/problems/project-employees-iii/solutions/3840399/)

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
/* Write your PL/SQL query statement below */


with cte as (
    select p.*, e.experience_years
    from project p join employee e
    on p.employee_id = e.employee_id
)
select t1.project_id, t1.employee_id
from cte t1 join cte t2
on t1.project_id = t2.project_id
and t1.experience_years <= t2.experience_years
group by t1.project_id, t1.employee_id, t1.experience_years
having count(distinct t2.experience_years)=1

```