# Simple Sub Query in WHERE Clause

**Author:** justinmclark
**Votes:** 9
**Link:** [https://leetcode.com/problems/department-top-three-salaries/solutions/5293047/](https://leetcode.com/problems/department-top-three-salaries/solutions/5293047/)

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
SELECT d.name AS Department, e.name AS Employee, salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE salary IN (
    SELECT DISTINCT(salary)
    FROM Employee
    WHERE Employee.departmentId = d.id
    ORDER BY salary DESC
    LIMIT 3
)
```