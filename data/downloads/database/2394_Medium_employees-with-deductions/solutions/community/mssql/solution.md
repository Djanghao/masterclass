# SQL Server

**Author:** Xing13682047257
**Votes:** 1
**Link:** [https://leetcode.com/problems/employees-with-deductions/solutions/2521850/](https://leetcode.com/problems/employees-with-deductions/solutions/2521850/)

---

```
WITH LoginTime AS (
	SELECT employee_id, 
	CEILING(CONVERT(FLOAT, SUM(DATEDIFF(SECOND, in_time, out_time))) / 60) AS login_time
	FROM Logs
	GROUP BY employee_id
)

SELECT e.employee_id
FROM Employees e
LEFT JOIN LoginTime l
ON e.employee_id = l.employee_id
WHERE e.needed_hours * 60 > ISNULL(l.login_time, 0)
```