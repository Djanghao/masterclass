# 🌟Simplified and optimized PostgreSQL statement 🚀 beats 94 % 😎

**Author:** MathieuSoysal
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/solutions/4988320/](https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/solutions/4988320/)

---

# Code

```PostgreSQL []
WITH managers AS(
    SELECT reports_to AS employee_id,
            COUNT(reports_to) AS reports_count,
            ROUND(AVG(age)) AS average_age
    FROM Employees
    WHERE reports_to IS NOT NULL
    GROUP BY reports_to
)

SELECT employee_id,
        name,
        reports_count,
        average_age
FROM managers AS m
INNER JOIN Employees AS e
USING(employee_id)
ORDER BY employee_id;
```
```MySQL []
WITH managers AS(
    SELECT reports_to AS employee_id,
            COUNT(reports_to) AS reports_count,
            ROUND(AVG(age)) AS average_age
    FROM Employees
    WHERE reports_to IS NOT NULL
    GROUP BY reports_to
)

SELECT employee_id,
        name,
        reports_count,
        average_age
FROM managers AS m
INNER JOIN Employees AS e
USING(employee_id)
ORDER BY employee_id;
```

If it was useful don't hesitate to upvote \uD83C\uDF20 Or keep it in favorite \uD83C\uDF1F
![Upvote invitation](./images/0.png)