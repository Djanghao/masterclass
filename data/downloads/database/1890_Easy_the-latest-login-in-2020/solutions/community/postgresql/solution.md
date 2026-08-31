# ✅ Simple solution using BETWEEN and MAX ✅

**Author:** Daniel_Charles_J
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-latest-login-in-2020/solutions/5781701/](https://leetcode.com/problems/the-latest-login-in-2020/solutions/5781701/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
MAX function is used to get the latest date, then BETWEEN clause used to filter between the 2020 starting and ending.


# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT user_id, MAX(time_stamp) as last_stamp FROM Logins 
WHERE time_stamp BETWEEN '2020-01-01 00:00:00' AND '2020-12-31 23:59:59'
GROUP BY user_id
ORDER BY user_id DESC
```