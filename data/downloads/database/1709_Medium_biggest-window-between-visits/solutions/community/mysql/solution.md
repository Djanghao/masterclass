# 2 SOLUTIONS: Analytic function and Self join (with comments)

**Author:** zrml
**Votes:** 63
**Link:** [https://leetcode.com/problems/biggest-window-between-visits/solutions/999291/](https://leetcode.com/problems/biggest-window-between-visits/solutions/999291/)

---

ANALYTIC FUNCTION:
```
SELECT user_id, MAX(diff) AS biggest_window
FROM
(
	SELECT user_id, 
	   DATEDIFF(LEAD(visit_date, 1, '2021-01-01') OVER (PARTITION BY user_id ORDER BY visit_date), visit_date) AS diff
	FROM userVisits
) a
GROUP BY user_id
ORDER BY user_id
```

SELF JOIN:
```
SELECT l.user_id,
 MAX(DATEDIFF(COALESCE(r.visit_Date, '2021-01-01'), l.visit_Date)) AS biggest_window
FROM
(
    SELECT u1.user_id, u1.visit_date, COUNT(DISTINCT u2.visit_date) AS rnk
    FROM
     uservisits u1
     LEFT JOIN
          uservisits u2
          ON u1.user_id = u2.user_id AND u1.visit_date > u2.visit_date # ascending to get ranking
    GROUP BY u1.user_id, u1.visit_Date
) l
LEFT JOIN
(
    SELECT u1.user_id, u1.visit_date, COUNT(DISTINCT u2.visit_date) AS rnk
    FROM 
     uservisits u1
     LEFT JOIN
          uservisits u2
          ON u1.user_id = u2.user_id AND u1.visit_date > u2.visit_date 
    GROUP BY u1.user_id, u1.visit_Date
) r
ON l.user_id = r.user_id AND l.rnk + 1 = r.rnk # descending to get next date after biggest date as NULL
GROUP BY user_id 
ORDER BY user_id
```