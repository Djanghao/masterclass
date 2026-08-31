# MySQL Clean Solution with LAG() and RANK()

**Author:** vanessaaleung
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-third-transaction/solutions/4509345/](https://leetcode.com/problems/find-third-transaction/solutions/4509345/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Use `RANK()` to find the third transaction for each user
- Use `LAG()` to find the spending on the preceding two transactions

# Code
```
# Write your MySQL query statement below
WITH get_prior_spend AS (
    SELECT
        *
        , RANK() OVER (PARTITION BY user_id ORDER BY transaction_date) AS rk
        , LAG(spend) OVER (PARTITION BY user_id ORDER BY transaction_date) AS second_transaction_spend
        , LAG(spend, 2) OVER (PARTITION BY user_id ORDER BY transaction_date) AS first_transaction_spend
    FROM Transactions
)
SELECT user_id, spend AS third_transaction_spend, transaction_date AS third_transaction_date
FROM get_prior_spend
WHERE
    rk = 3
    AND spend > second_transaction_spend
    AND spend > first_transaction_spend
ORDER BY 1

```