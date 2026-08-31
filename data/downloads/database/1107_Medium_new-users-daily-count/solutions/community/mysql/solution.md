# MySQL, GROUP BY, not using CTE

**Author:** zhaiyixian
**Votes:** 3
**Link:** [https://leetcode.com/problems/new-users-daily-count/solutions/2254491/](https://leetcode.com/problems/new-users-daily-count/solutions/2254491/)

---

```SELECT activity_date AS login_date, COUNT(DISTINCT user_id)AS user_count
FROM Traffic
WHERE DATEDIFF('2019-06-30',activity_date) <= 90 
    AND ((user_id, activity_date) IN 
         (SELECT user_id, MIN(activity_date) FROM Traffic WHERE activity = 'login' GROUP BY user_id ))
GROUP BY activity_date;