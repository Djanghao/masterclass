# cte - lead -> groupby

**Author:** c0dem0nger
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-play-analysis-v/solutions/6093947/](https://leetcode.com/problems/game-play-analysis-v/solutions/6093947/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
WITH t_login AS (
    SELECT  player_id,
            MIN(event_date) AS login_date
    FROM    activity
    GROUP BY
            player_id
),
t_next_login AS (
    SELECT  player_id,
            event_date,
            LEAD(event_date,1) OVER (PARTITION BY player_id ORDER BY event_date ASC) AS next_login
    FROM    activity
),
t_diff AS (
    SELECT  tn.player_id,
            tn.event_date,
            CASE 
                WHEN NVL(tn.next_login - tn.event_date, 0) = 1 THEN 1
                ELSE 0
            END     AS retention_cnt
    FROM    t_next_login tn
    INNER JOIN
            t_login tl
    ON      tl.player_id    =   tn.player_id
    AND     tl.login_date   =   tn.event_date
)
SELECT  TO_CHAR(event_date,'YYYY-MM-DD')                "install_dt",
        COUNT(event_date)                               "installs",
        ROUND(SUM(retention_cnt)/COUNT(event_date),2)   "Day1_retention"
FROM    t_diff
GROUP BY
        event_date;
```