# Very Easy MS SQL Server Solution using CTE and MAX()

**Author:** Vaishnav-Dahake
**Votes:** 1
**Link:** [https://leetcode.com/problems/project-employees-ii/solutions/2525637/](https://leetcode.com/problems/project-employees-ii/solutions/2525637/)

---

```
WITH CTE_PROJECT AS
(
        SELECT project_id , COUNT(employee_id) as cnt_emp
        FROM Project 
        GROUP BY project_id
)
SELECT project_id 
FROM CTE_PROJECT
WHERE cnt_emp IN ( SELECT MAX(cnt_emp) FROM CTE_PROJECT  )
```