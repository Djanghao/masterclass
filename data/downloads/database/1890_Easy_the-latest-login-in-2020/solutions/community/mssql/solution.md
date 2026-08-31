# MS SQL and MySQL solution

**Author:** vazhev
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-latest-login-in-2020/solutions/1970592/](https://leetcode.com/problems/the-latest-login-in-2020/solutions/1970592/)

---

```
SELECT
    user_id, 
    max(time_stamp) as last_stamp 
FROM 
    Logins 
WHERE 
    time_stamp BETWEEN '2020-01-01' AND '2020-12-31 23:59:59'
GROUP BY
    user_id
```