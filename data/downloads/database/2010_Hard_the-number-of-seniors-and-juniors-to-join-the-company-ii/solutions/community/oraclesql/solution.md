# CTE, window function

**Author:** iliyas1903
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/solutions/6097287/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/solutions/6097287/)

---


# Code
```oraclesql []
/* Write your PL/SQL query statement below */
WITH cte AS (
        SELECT 
            employee_id,
            experience,
            salary,
            SUM(salary) OVER(PARTITION BY experience ORDER BY salary, employee_id) AS cum_sum,
            70000 - SUM(salary) OVER(PARTITION BY experience ORDER BY salary, employee_id) AS balance
        FROM Candidates),

cte_senior AS (
        SELECT
            cte.employee_id AS employee_id,
            cte.experience AS experience,
            cte.salary AS salary,
            cte.balance AS balance
        FROM cte 
        WHERE cte.experience = 'Senior' AND cte.balance >= 0),

cte_junior AS (
SELECT DISTINCT 
        cte.employee_id AS employee_id,
        cte.experience AS experience,
        cte.salary AS salary,
        cte.cum_sum AS cum_sum_jun,
        COALESCE(MIN(cte_senior.balance) OVER (), 70000) AS jun_balance,
        COALESCE(MIN(cte_senior.balance) OVER (), 70000) - cte.cum_sum AS ostatok
FROM cte 
LEFT JOIN cte_senior 
        ON cte_senior.experience = 'Senior'
WHERE cte.experience = 'Junior')

SELECT
        cte_senior.employee_id AS employee_id
FROM cte_senior

UNION ALL

SELECT DISTINCT 
        cte_junior.employee_id AS employee_id
FROM cte_junior
WHERE cte_junior.ostatok >=0






```