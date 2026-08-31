# two solutions, both beat 100%

**Author:** CodeSunny
**Votes:** 34
**Link:** [https://leetcode.com/problems/create-a-session-bar-chart/solutions/610956/](https://leetcode.com/problems/create-a-session-bar-chart/solutions/610956/)

---

### method 1: 
First, create a 'frame' with `UNION ALL`, then `JOIN` the aggregated results to the frame, so that even if there is no record for some categories, we can still use `IFNULL` to fill with 0. 
```
SELECT b.bin, IFNULL(COUNT(s.session_id),0) AS total
FROM 
    (SELECT session_id, 
           CASE WHEN duration/60<5 THEN '[0-5>'
                WHEN duration/60>=5 AND duration/60<10 THEN '[5-10>'
                WHEN duration/60>=10 AND duration/60<15 THEN '[10-15>'
                ELSE '15 or more' END AS bin
    FROM sessions) s
RIGHT JOIN 
    (SELECT '[0-5>' AS bin
     UNION ALL
     SELECT '[5-10>' AS bin
     UNION ALL
     SELECT '[10-15>' AS bin
     UNION ALL
     SELECT '15 or more' AS bin) b
        ON b.bin=s.bin
GROUP BY bin
```

### method 2: 
Aggregate first, then `UNION ALL`

```
WITH cte AS (
    SELECT duration/60 AS mins
    FROM sessions
)

SELECT '[0-5>' AS bin,
       SUM(CASE WHEN mins<5 THEN 1 ELSE 0 END) AS total
FROM cte
UNION ALL
SELECT '[5-10>' AS bin,
       SUM(CASE WHEN mins>=5 AND mins<10 THEN 1 ELSE 0 END) AS total
FROM cte
UNION ALL
SELECT '[10-15>' AS bin,
       SUM(CASE WHEN mins>=10 AND mins<15 THEN 1 ELSE 0 END) AS total
FROM cte
UNION ALL
SELECT '15 or more' AS bin,
       SUM(CASE WHEN mins>=15 THEN 1 ELSE 0 END) AS total
FROM cte
```



















