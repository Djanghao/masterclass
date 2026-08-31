# Easy solution

**Author:** aafreensingh26
**Votes:** 5
**Link:** [https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/3789532/](https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/3789532/)

---



# Code
```
SELECT employee_id 
FROM Employees 
WHERE salary<30000 AND manager_id NOT IN (SELECT employee_id FROM Employees)
ORDER BY employee_id
```