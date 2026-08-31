# Implementing FULL JOIN in MySQL

**Author:** speedychital
**Votes:** 271
**Link:** [https://leetcode.com/problems/employees-with-missing-information/solutions/1946042/](https://leetcode.com/problems/employees-with-missing-information/solutions/1946042/)

---

* There is no natively implemented Outer Join in MySQL.
* But we can implement **OUTER JOIN** in MySQL by taking a LEFT JOIN and RIGHT JOIN union.
* If column names of two tables are identical, we can use the USING clause instead of the ON clause.
```
SELECT T.employee_id
FROM  
  (SELECT * FROM Employees LEFT JOIN Salaries USING(employee_id)
   UNION 
   SELECT * FROM Employees RIGHT JOIN Salaries USING(employee_id))
AS T
WHERE T.salary IS NULL OR T.name IS NULL
ORDER BY employee_id;