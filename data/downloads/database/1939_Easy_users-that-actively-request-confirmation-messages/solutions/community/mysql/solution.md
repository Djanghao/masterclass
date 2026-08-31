# [MySQL] SELF JOIN

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/users-that-actively-request-confirmation-messages/solutions/1407786/](https://leetcode.com/problems/users-that-actively-request-confirmation-messages/solutions/1407786/)

---


```
SELECT DISTINCT a.user_id
FROM Confirmations a, Confirmations b
WHERE
    a.user_id = b.user_id 
    AND a.time_stamp < b.time_stamp 
    AND TIMESTAMPDIFF(SECOND, a.time_stamp, b.time_stamp) <= 86400
```