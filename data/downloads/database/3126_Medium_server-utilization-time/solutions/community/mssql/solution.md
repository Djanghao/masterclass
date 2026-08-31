# Concise solution with LEAD and a CTE

**Author:** esgranet
**Votes:** 0
**Link:** [https://leetcode.com/problems/server-utilization-time/solutions/6094205/](https://leetcode.com/problems/server-utilization-time/solutions/6094205/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
WITH StartStop (sever_id, session_status, starting_time, stop_time) AS (
    SELECT server_id, session_status, status_time,
        LEAD(status_time) OVER(PARTITION BY server_id ORDER BY status_time)
    FROM Servers
)
SELECT SUM(DATEDIFF(second, starting_time, stop_time)) / (3600 * 24) AS total_uptime_days
FROM StartStop
WHERE session_status = 'start'
```