# Fastest and easy to understand solution

**Author:** SourabhShelke
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-salary-departments-vs-company/solutions/3352120/](https://leetcode.com/problems/average-salary-departments-vs-company/solutions/3352120/)

---



# Approach
Using CASE, SUBQUERY and AVG() window function on Salary Amount.

Firstly if we see the subquery, we are deriving *Company's average salary* and *Department's average salary* by the *pay_month* in the same output.

Once, we get the above mentioned output, we go to the outer query and use a CASE statement to check our given three conditions.



# Code
```
/* Write your T-SQL query statement below */

SELECT DISTINCT pay_month, department_id, 
(
    CASE
    WHEN avg_dept_sal > avg_company_sal THEN "higher"
    WHEN avg_dept_sal < avg_company_sal THEN "lower"
    WHEN avg_dept_sal = avg_company_sal THEN "same"
    END
) as comparison
FROM 
(
    SELECT s.employee_id, amount, pay_Date, department_id, LEFT(s.pay_date, 7) as pay_month,
     AVG(s.amount) OVER(PARTITION BY s.pay_date) as avg_company_sal,
     AVG(s.amount) OVER(PARTITION BY s.pay_Date, e.department_id) as avg_dept_sal
    FROM Salary s
    JOIN Employee e ON s.employee_id = e.employee_id
) as tmp;


```