# Easy Solution using CTE & Join - No window functions.

**Author:** andy3545
**Votes:** 0
**Link:** [https://leetcode.com/problems/suspicious-bank-accounts/solutions/6083238/](https://leetcode.com/problems/suspicious-bank-accounts/solutions/6083238/)

---


# Code
```postgresql []
with monthly_income AS (
    SELECT
        account_id,
        DATE_TRUNC('month', day)::DATE as month,
        SUM(amount) as total_income
    FROM transactions
    WHERE type = 'Creditor'
    GROUP BY 1,2
),

higher_income as (
    SELECT monthly_income.*
    FROM monthly_income
    JOIN accounts USING(account_id)
    WHERE total_income > max_income
)

SELECT a.account_id
FROM higher_income a
JOIN higher_income b
ON a.account_id = b.account_id
AND a.month = (b.month + INTERVAL '1 month')
GROUP BY 1
```