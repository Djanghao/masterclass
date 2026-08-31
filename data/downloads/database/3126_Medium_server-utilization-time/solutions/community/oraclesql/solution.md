# Using lead() - ✅|| ORACLE || 709 ms ||🔥|| Beats 100.00% ||🏆

**Author:** DJQTDJ
**Votes:** 2
**Link:** [https://leetcode.com/problems/server-utilization-time/solutions/5090017/](https://leetcode.com/problems/server-utilization-time/solutions/5090017/)

---

# Code
```
/* Write your PL/SQL query statement below */
SELECT
    FLOOR( 
        SUM( 
            CASE session_status 
                WHEN 'start' then (status_time2 - status_time) 
                ELSE 0 
                END
        )
    ) AS total_uptime_days 
FROM
    ( 
        SELECT
            server_id
            , status_time
            , session_status
            , LEAD(status_time, 1) OVER ( 
                PARTITION BY
                    server_id 
                ORDER BY
                    status_time
                    , session_status
            ) AS status_time2 
        FROM
            servers
    );
```