# Oracle Best And Simple Solution

**Author:** ruthvikc27-dev
**Votes:** 3
**Link:** [https://leetcode.com/problems/bank-account-summary-ii/solutions/2284052/](https://leetcode.com/problems/bank-account-summary-ii/solutions/2284052/)

---

```
/* Write your PL/SQL query statement below */

SELECT * FROM
(
    SELECT 
    u.name AS "NAME", 
    SUM(t.amount) AS "BALANCE" FROM users u
    NATURAL JOIN
    transactions t
    GROUP BY account, u.name
) WHERE balance > 10000;
```