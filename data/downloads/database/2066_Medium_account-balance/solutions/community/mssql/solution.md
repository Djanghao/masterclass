# MSSQL SIMPLE SOLUTION

**Author:** ahmedtremo
**Votes:** 1
**Link:** [https://leetcode.com/problems/account-balance/solutions/1723604/](https://leetcode.com/problems/account-balance/solutions/1723604/)

---

````
SELECT
    account_id,
    day,
    SUM(CASE WHEN type = 'Deposit' THEN amount ELSE -amount END) OVER(PARTITION BY account_id ORDER BY day) AS balance
FROM Transactions
ORDER BY account_id, day