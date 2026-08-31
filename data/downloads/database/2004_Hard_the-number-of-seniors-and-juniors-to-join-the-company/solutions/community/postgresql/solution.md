# Legendary Postgres Solution

**Author:** austinmclaughlin1
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/5767859/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/5767859/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Create a cumulative sum of the salaries partitioned by experience (junior / senior) and ordered by salary.
Get the number of seniors with a cumulative sum <= 70k
Get the number of juniors with a cumulative sum <= (70k - max Senior cumulative salary)

# Code
```postgresql []
-- SUM salary OVER PARTITION BY experience ORDER BY salary
-- SELECT the number of seniors while salarySum <= 70000
-- SELECT the number of juniors with the remaining salarySum

WITH SalarySums AS (
    SELECT *, SUM(salary) OVER(PARTITION BY experience ORDER BY salary, employee_id) salary_sum
    FROM Candidates
),
Seniors AS (
    SELECT employee_id, experience, salary_sum FROM SalarySums WHERE salary_sum <= 70000 AND experience = 'Senior'
)

SELECT b.experience, COUNT(a.experience) accepted_candidates FROM (
    SELECT employee_id, experience FROM Seniors
    UNION ALL
    SELECT employee_id, experience FROM SalarySums 
    WHERE salary_sum <= (70000 - (SELECT COALESCE(MAX(salary_sum),0) FROM Seniors))
        AND experience = 'Junior'
) a
RIGHT JOIN (SELECT 'Junior' AS experience UNION SELECT 'Senior' AS experience) b ON a.experience = b.experience
GROUP BY b.experience
```