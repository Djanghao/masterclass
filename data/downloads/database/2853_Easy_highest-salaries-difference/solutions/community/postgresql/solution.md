# Subquery and group function

**Author:** dmrelaxxus
**Votes:** 1
**Link:** [https://leetcode.com/problems/highest-salaries-difference/solutions/5108335/](https://leetcode.com/problems/highest-salaries-difference/solutions/5108335/)

---


```
SELECT MAX(salary) - MIN(salary) salary_difference
FROM 
(
    SELECT MAX(salary) salary
    FROM Salaries
    WHERE department = 'Marketing' OR department = 'Engineering'
    GROUP BY department
)
```