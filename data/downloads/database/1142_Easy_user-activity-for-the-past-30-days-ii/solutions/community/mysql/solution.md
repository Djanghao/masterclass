# simple solution without temp

**Author:** user3091T
**Votes:** 6
**Link:** [https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/1772292/](https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/1772292/)

---


SELECT IFNULL(ROUND((COUNT(DISTINCT session_id)/COUNT(DISTINCT user_id)),2),0.00) AS average_sessions_per_user
FROM Activity
WHERE activity_date BETWEEN '2019-06-28' AND '2019-07-27'