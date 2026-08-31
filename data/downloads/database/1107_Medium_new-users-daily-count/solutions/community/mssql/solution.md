# simple CTE

**Author:** PeterHontaru
**Votes:** 4
**Link:** [https://leetcode.com/problems/new-users-daily-count/solutions/1369957/](https://leetcode.com/problems/new-users-daily-count/solutions/1369957/)

---

```
WITH first_login AS(
SELECT user_id, MIN(activity_date) AS login_date
FROM Traffic
WHERE activity = 'login'
GROUP BY user_id)

SELECT login_date, COUNT(*) as user_count
FROM first_login
WHERE login_date >= DATEADD(day, -90, '2019-06-30')
GROUP BY login_date
```