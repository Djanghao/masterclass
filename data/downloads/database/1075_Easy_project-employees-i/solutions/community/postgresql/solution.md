# Clear and concise solution||PostgreSQL

**Author:** anjalikrishna58082
**Votes:** 5
**Link:** [https://leetcode.com/problems/project-employees-i/solutions/5369745/](https://leetcode.com/problems/project-employees-i/solutions/5369745/)

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
select project_id,round(avg(experience_years)::numeric,2) as average_years
from Project p
left join Employee e on e.employee_id=p.employee_id
Group by project_id order by project_id;
```