# Simple Solution using Full Join

**Author:** Daniel_Charles_J
**Votes:** 3
**Link:** [https://leetcode.com/problems/employees-with-missing-information/solutions/5770183/](https://leetcode.com/problems/employees-with-missing-information/solutions/5770183/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
For this we should know the FULL JOIN Combination of RIGHT and LEFT join, In first solution used FULL JOIN directly, In second Solution showed how it is working without FULL JOIN. Both will work.


# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT COALESCE(t1.employee_id, t2.employee_id) AS employee_id
FROM Employees t1 FULL JOIN Salaries t2
ON t1.employee_id = t2.employee_id
WHERE t1.name IS NULL OR t2.salary IS NULL
ORDER BY employee_id 
```


# Code
```postgresql []
-- Write your PostgreSQL query statement below
WITH temp as (SELECT e.employee_id as emplyee_id_1, e.name as name_1, s.employee_id as employee_id_2, s.salary as salary FROM Employees e LEFT JOIN Salaries s ON e.employee_id = s.employee_id
UNION
SELECT e.employee_id as emplyee_id_1, e.name as name_1, s.employee_id as employee_id_2, s.salary as salary FROM Employees e RIGHT JOIN Salaries s ON e.employee_id = s.employee_id)

SELECT COALESCE(emplyee_id_1, employee_id_2) as employee_id   FROM temp WHERE emplyee_id_1 IS NULL OR name_1 IS NULL OR employee_id_2 IS NULL OR salary IS NULL ORDER BY 1
```