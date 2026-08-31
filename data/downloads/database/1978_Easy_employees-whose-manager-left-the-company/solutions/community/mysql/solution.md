# 2 Approaches - Solution with Minimal Code

**Author:** muneebshoukat60
**Votes:** 114
**Link:** [https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/3942616/](https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/3942616/)

---

# Intuition
These approaches emphasizes achieving **performance with minimal code**.

# Approach 1

Using **JOIN**

# Code
```
SELECT e1.employee_id
FROM Employees e1
LEFT JOIN Employees e2
ON e1.manager_id = e2.employee_id
WHERE e1.salary < 30000 AND e2.employee_id IS NULL AND e1.manager_id IS NOT NULL
ORDER BY employee_id;

```

# Approach 2

Using **Subquery**

# Code
```
SELECT employee_id
FROM Employees
WHERE salary < 30000
AND manager_id NOT IN (
  SELECT employee_id FROM Employees
)
ORDER BY employee_id;
```

Please **Upvote** if you find helpful.
