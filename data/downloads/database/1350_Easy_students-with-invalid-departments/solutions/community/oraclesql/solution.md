# left join

**Author:** user8001cu
**Votes:** 0
**Link:** [https://leetcode.com/problems/students-with-invalid-departments/solutions/4674373/](https://leetcode.com/problems/students-with-invalid-departments/solutions/4674373/)

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
select
s.id,
s.name
from
students s 
left join departments d
on s.department_id = d.id 
where
d.id is null
```