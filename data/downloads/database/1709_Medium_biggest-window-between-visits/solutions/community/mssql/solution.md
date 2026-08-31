# Window function with subquery

**Author:** PeterHontaru
**Votes:** 3
**Link:** [https://leetcode.com/problems/biggest-window-between-visits/solutions/1387661/](https://leetcode.com/problems/biggest-window-between-visits/solutions/1387661/)

---

```
SELECT user_id, MAX(biggest_window) as biggest_window
FROM (
SELECT user_id, 
    DATEDIFF(day, visit_date, COALESCE(LEAD(visit_date, 1) OVER(PARTITION BY user_id ORDER BY visit_date), '2021-1-1')) AS biggest_window
FROM UserVisits) AS data
GROUP BY user_id
ORDER BY user_Id
```