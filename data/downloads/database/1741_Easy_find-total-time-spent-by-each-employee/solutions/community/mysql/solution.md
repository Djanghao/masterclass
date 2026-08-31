# [MySQL] grouping

**Author:** ye15
**Votes:** 67
**Link:** [https://leetcode.com/problems/find-total-time-spent-by-each-employee/solutions/1045545/](https://leetcode.com/problems/find-total-time-spent-by-each-employee/solutions/1045545/)

---


```
SELECT 
    event_day AS day, 
    emp_id, 
    SUM(out_time - in_time) AS total_time
FROM Employees
GROUP BY 1, 2
```