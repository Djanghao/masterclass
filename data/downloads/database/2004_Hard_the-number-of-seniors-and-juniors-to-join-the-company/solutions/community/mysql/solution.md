# Simple solution using Window function, looks lengthy but its all repetitive

**Author:** shadab249
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/5377093/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/5377093/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

1. Calculates the cumulative salary for seniors and orders them by salary.
2. Same, Calculates the cumulative salary for juniors and orders them by salary.
3. final_seniors CTE: This part of CTE calculates the total number of seniors that can be hired without exceeding the budget.
- COUNT- Counts the number of senior candidates that can be hired within the budget.
- MAX(running_total): Retrieves the maximum cumulative salary of the seniors that can be hired without exceeding the $70,000 budget
- WHERE running_total <= 70000: Ensures that only the seniors whose cumulative salaries do not exceed 70000 budget.

4. final_juniors CTE: Same as Final_senior only difference you will notice is in WHERE stetement
This CTE calculates the total number of juniors that can be hired with the remaining budget after hiring the seniors.

- WHERE running_total <= (70000 - (SELECT IFNULL(total_senior_salary, 0) FROM final_seniors)):

- Running_total: Ensures that only the juniors whose cumulative salaries do not exceed the remaining budget are considered.

- 70000 - (SELECT IFNULL(total_senior_salary, 0) FROM final_seniors): Calculates the remaining budget after hiring seniors.

- IFNULL(total_senior_salary, 0): If no seniors are hired, total_senior_salary will be NULL. The IFNULL function replaces NULL with 0 to ensure the remaining budget calculation is correct.

5. Final SELECT Statement :Combines the results of seniors and juniors into a single output table using UNION ALL



# Code
```
WITH senior_hires AS (
    SELECT employee_id,salary,
    SUM(salary) OVER (ORDER BY salary) AS running_total
    FROM candidates
    WHERE experience = 'Senior'
),
junior_hires AS (
    SELECT employee_id,salary,
        SUM(salary) OVER (ORDER BY salary) AS running_total
    FROM candidates
    WHERE experience = 'Junior'
),
final_seniors AS (
    SELECT COUNT(employee_id) AS num_seniors,MAX(running_total) AS total_senior_salary
    FROM senior_hires
    WHERE running_total <= 70000
),
final_juniors AS (
    SELECT COUNT(employee_id) AS num_juniors
    FROM junior_hires
    WHERE running_total <= (70000 - (SELECT IFNULL(total_senior_salary, 0) FROM final_seniors)
        )
)
SELECT 'Senior' AS experience,
    (SELECT num_seniors FROM final_seniors) AS accepted_candidates
UNION ALL
SELECT 'Junior' AS experience,
    (SELECT num_juniors FROM final_juniors) AS accepted_candidates;






```