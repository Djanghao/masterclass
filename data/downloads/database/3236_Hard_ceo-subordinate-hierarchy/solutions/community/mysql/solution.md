# MySQL - Beat 100%, Recursive CTE

**Author:** epiccrumple_0x
**Votes:** 5
**Link:** [https://leetcode.com/problems/ceo-subordinate-hierarchy/solutions/5556013/](https://leetcode.com/problems/ceo-subordinate-hierarchy/solutions/5556013/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need recursive CTE for hierarchy_level. 
It initializes by selecting the CEO (as hierarchy 0). Next recursion selects those who report to the CEO (as hierarchy 1). Next recursion selects those who report to the hierarchy 1 employees (as hierarchy 2). And so on ... 

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
WITH RECURSIVE t AS (
    SELECT employee_id, employee_name, 0 AS hierarchy_level, salary
    FROM Employees
    WHERE manager_id IS NULL
    UNION ALL
    SELECT e.employee_id, e.employee_name, hierarchy_level + 1, e.salary - (SELECT salary FROM Employees WHERE manager_id IS NULL)
    FROM Employees e
    JOIN t
    ON t.employee_id = e.manager_id
)

SELECT employee_id AS subordinate_id, employee_name AS subordinate_name, hierarchy_level, salary AS salary_difference
FROM t
WHERE hierarchy_level > 0
ORDER BY 3, 1
```