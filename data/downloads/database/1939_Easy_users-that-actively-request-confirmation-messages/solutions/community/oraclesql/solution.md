# Solution : Oracle - Self Join

**Author:** anand-prakash
**Votes:** 0
**Link:** [https://leetcode.com/problems/users-that-actively-request-confirmation-messages/solutions/1663485/](https://leetcode.com/problems/users-that-actively-request-confirmation-messages/solutions/1663485/)

---

```
/* Write your PL/SQL query statement below */
SELECT distinct c1.user_id as user_id 
FROM Confirmations c1 JOIN Confirmations c2 ON c1.user_id=c2.user_id 
and c1.time_stamp > c2.time_stamp 
WHERE (c1.time_stamp - c2.time_stamp)*24*60*60<=86400

```