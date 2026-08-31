# SQL SERVER - CTE + AVG

**Author:** David_Huarino
**Votes:** 0
**Link:** [https://leetcode.com/problems/employees-project-allocation/solutions/5460853/](https://leetcode.com/problems/employees-project-allocation/solutions/5460853/)

---

```
WITH cte AS (
    SELECT
        AVG(CAST(A.workload AS FLOAT)) OVER(PARTITION BY B.team) AS average_team,
        A.workload,
        A.project_id,
        A.employee_id,
        B.name,
        B.team
    FROM Project A
        INNER JOIN Employees B
            ON A.employee_id = B.employee_id
)
SELECT 
    C.employee_id AS EMPLOYEE_ID,
    C.project_id AS PROJECT_ID,
    C.name AS EMPLOYEE_NAME,
    C.workload AS PROJECT_WORKLOAD
FROM cte C
WHERE C.workload > C.average_team
ORDER BY C.employee_id, C.project_id
```