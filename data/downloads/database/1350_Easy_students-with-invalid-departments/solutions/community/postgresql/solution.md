# PostgreSQL: left join + where (is null)

**Author:** alek_leetc
**Votes:** 1
**Link:** [https://leetcode.com/problems/students-with-invalid-departments/solutions/5086320/](https://leetcode.com/problems/students-with-invalid-departments/solutions/5086320/)

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
select s.id, s.name
from Students s left join Departments d on s.department_id = d.id
where d.id is null
```