# MySQL - Simple solution

**Author:** dolong2110
**Votes:** 3
**Link:** [https://leetcode.com/problems/students-with-invalid-departments/solutions/2897121/](https://leetcode.com/problems/students-with-invalid-departments/solutions/2897121/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N * M) - N, M is number of rows in two tables respectively.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Write your MySQL query statement below
select id, name
from Students s
where department_id not in
(select id from Departments);
```