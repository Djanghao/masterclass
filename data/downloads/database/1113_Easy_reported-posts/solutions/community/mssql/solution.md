# [MS SQL] [MySQL] simple groupby

**Author:** leonenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/reported-posts/solutions/332504/](https://leetcode.com/problems/reported-posts/solutions/332504/)

---

MS SQL
```
DECLARE @yesterday DATETIME;
SET @yesterday=DATEADD(day, -1, '2019-07-05');

SELECT 
    extra report_reason
    , COUNT(DISTINCT post_id) report_count
FROM Actions
WHERE action_date=@yesterday AND action='report'
GROUP BY extra
```

MySQL
```
SELECT 
    extra report_reason
    , COUNT(DISTINCT post_id) report_count
FROM Actions
WHERE action_date=DATE_ADD('2019-07-05', INTERVAL -1 DAY) AND action='report'
GROUP BY extra
```