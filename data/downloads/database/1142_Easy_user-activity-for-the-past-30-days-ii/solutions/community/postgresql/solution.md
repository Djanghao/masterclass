# 🌟 PostgreSQL solution

**Author:** MathieuSoysal
**Votes:** 1
**Link:** [https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/5014385/](https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/5014385/)

---

# Code
```
SELECT COALESCE(ROUND(AVG(nb_usage), 2), 0) AS average_sessions_per_user
FROM (
    SELECT user_id,
        COUNT(DISTINCT session_id) AS nb_usage
    FROM Activity
    WHERE activity_date BETWEEN '2019-07-28'::date - INTERVAL '30 day' AND '2019-07-27'::date
    GROUP BY user_id
)
```
___

If it was useful don't hesitate to upvote \uD83C\uDF20
![Upvote invitation](./images/0.png)