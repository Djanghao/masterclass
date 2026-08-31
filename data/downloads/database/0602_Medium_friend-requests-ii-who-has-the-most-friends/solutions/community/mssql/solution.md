# Simple solution using Subquery in SQL Server

**Author:** user1652uo
**Votes:** 16
**Link:** [https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/3535337/](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/3535337/)

---

**Upvote if you feel it easy :)**

# Code
```
/* Write your T-SQL query statement below */
SELECT TOP 1 X.id, count(X.id) as num
FROM (
    SELECT requester_id as id
    FROM RequestAccepted
    UNION ALL
    SELECT accepter_id
    FROM RequestAccepted
) X
GROUP BY X.id
ORDER BY num DESC;
```