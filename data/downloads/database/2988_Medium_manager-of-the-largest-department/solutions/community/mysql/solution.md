# Easy window function and cte

**Author:** oat_milk_americano
**Votes:** 2
**Link:** [https://leetcode.com/problems/manager-of-the-largest-department/solutions/4559246/](https://leetcode.com/problems/manager-of-the-largest-department/solutions/4559246/)

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
# Write your MySQL query statement below
WITH t AS (SELECT dep_id, RANK() OVER(ORDER BY COUNT(emp_id) DESC) AS rnk
FROM Employees
GROUP BY dep_id)

SELECT emp_name AS manager_name, dep_id
FROM Employees
WHERE position = "Manager" AND dep_id IN (SELECT dep_id
FROM t
WHERE rnk = 1)
ORDER BY dep_id
```