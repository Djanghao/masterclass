# DENSE_RANK() Solution

**Author:** iamkonstantin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-transaction-each-day/solutions/6071428/](https://leetcode.com/problems/maximum-transaction-each-day/solutions/6071428/)

---

# Code
```postgresql []
SELECT transaction_id
FROM(
    SELECT transaction_id,
           DENSE_RANK() OVER(PARTITION BY day ORDER BY amount DESC) as r
    FROM Transactions
    ORDER BY transaction_id
)
WHERE r = 1

```