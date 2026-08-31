# MS SQL - beats 100% - CTE, WINDOW FUNCTION, EXISTS

**Author:** jjnotjimmyjohn
**Votes:** 0
**Link:** [https://leetcode.com/problems/viewers-turned-streamers/solutions/5343831/](https://leetcode.com/problems/viewers-turned-streamers/solutions/5343831/)

---



# Code
```
/* Write your T-SQL query statement below */

-- window function -> row_number(), EXISTS (rownum=1 and session_type=viewer) And exists (rownum<>1 and session_type=streamer)

WITH helper AS(
    SELECT *,ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY session_start) session_rownum
    FROM Sessions
)

SELECT h.user_id, SUM(CASE WHEN h.session_type='Streamer' THEN 1 ELSE 0 END) sessions_count
FROM helper h
WHERE EXISTS (
    SELECT 1
    FROM helper h1
    WHERE h1.session_rownum=1 and h1.session_type='Viewer'
    AND h1.user_id=h.user_id
) 
AND h.session_type='Streamer'
GROUP BY h.user_id
ORDER BY SUM(CASE WHEN h.session_type='Streamer' THEN 1 ELSE 0 END) DESC, h.user_id DESC
```