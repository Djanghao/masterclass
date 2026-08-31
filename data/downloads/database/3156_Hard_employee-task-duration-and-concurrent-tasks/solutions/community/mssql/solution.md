# Simple solution with two CTE and a self JOIN

**Author:** esgranet
**Votes:** 0
**Link:** [https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/solutions/6094700/](https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/solutions/6094700/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
WITH TaskDuration (employee_id, total_task_duration) AS (
    SELECT employee_id, SUM(DATEDIFF(second, start_time, end_time))
    FROM Tasks
    GROUP BY employee_id
),
Overlaps (employee_id, concurrent_tasks, overlap_duration) AS (
    SELECT A.employee_id, 1 + COUNT(B.task_id), SUM(DATEDIFF(second, B.start_time, A.end_time))
    FROM Tasks AS A
    INNER JOIN Tasks AS B
    ON A.employee_id = B.employee_id
        AND B.start_time > A.start_time AND B.start_time < A.end_time
    GROUP BY A.employee_id, A.start_time
)
SELECT A.employee_id, 
    (A.total_task_duration - COALESCE(SUM(B.overlap_duration), 0)) / 3600 AS total_task_hours, 
    COALESCE(MAX(B.concurrent_tasks), 1) AS max_concurrent_tasks
FROM TaskDuration AS A
LEFT JOIN Overlaps AS B
ON A.employee_id = B.employee_id
GROUP BY A.employee_id, A.total_task_duration
ORDER BY A.employee_id
```