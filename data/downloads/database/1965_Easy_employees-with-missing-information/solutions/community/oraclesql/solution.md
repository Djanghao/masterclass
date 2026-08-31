# Oracle / MySQL 2WAYS Clean

**Author:** FLlGHT
**Votes:** 15
**Link:** [https://leetcode.com/problems/employees-with-missing-information/solutions/1882490/](https://leetcode.com/problems/employees-with-missing-information/solutions/1882490/)

---

### Oracle
```
SELECT e.employee_id 
  FROM Employees e 
  LEFT JOIN Salaries s ON e.employee_id = s.employee_id
  WHERE s.salary IS NULL
  UNION
 SELECT s1.employee_id
   FROM Salaries s1
   LEFT JOIN Employees e1 ON e1.employee_id = s1.employee_id
  WHERE e1.name IS NULL
```

### MySQL

```
SELECT employee_id 
  FROM Salaries 
 WHERE employee_id NOT IN (SELECT employee_id 
                             FROM Employees
                           )
UNION
SELECT employee_id 
  FROM Employees 
 WHERE employee_id NOT IN (SELECT employee_id 
                             FROM Salaries
                           )
ORDER BY 1
```