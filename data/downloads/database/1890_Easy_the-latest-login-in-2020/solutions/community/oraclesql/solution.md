# Oracle solution with TO_CHAR func

**Author:** chudnovskyi
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-latest-login-in-2020/solutions/2761177/](https://leetcode.com/problems/the-latest-login-in-2020/solutions/2761177/)

---

```
SELECT user_id, MAX(time_stamp) last_stamp
FROM Logins
WHERE TO_CHAR(time_stamp, 'YYYY') = '2020'
GROUP BY user_id;
```