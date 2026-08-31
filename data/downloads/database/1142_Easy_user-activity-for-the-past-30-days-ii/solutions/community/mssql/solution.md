# simple SQL

**Author:** PeterHontaru
**Votes:** 4
**Link:** [https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/1422103/](https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/1422103/)

---

```
SELECT ISNULL(ROUND(AVG(sessions), 2), 0.00) AS average_sessions_per_user
FROM
(
SELECT user_id, COUNT(DISTINCT session_id)*1.00 as sessions
FROM Activity
WHERE activity_date BETWEEN DATEADD(day, -29, '2019-07-27') AND '2019-07-27'
GROUP BY user_id
) AS temp_table
```