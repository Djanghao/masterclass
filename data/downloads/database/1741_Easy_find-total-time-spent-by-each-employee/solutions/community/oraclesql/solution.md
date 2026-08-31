# Oracle Simple and Fastest Solution

**Author:** ruthvikc27-dev
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-total-time-spent-by-each-employee/solutions/2282167/](https://leetcode.com/problems/find-total-time-spent-by-each-employee/solutions/2282167/)

---

```
/* Write your PL/SQL query statement below */

SELECT 
TO_CHAR(event_day, 'YYYY-MM-DD') AS "day", 
emp_id, 
SUM(out_time) - SUM(in_time) AS "total_time" 
FROM employees 
GROUP BY event_day, emp_id 
ORDER BY "total_time" DESC;
```