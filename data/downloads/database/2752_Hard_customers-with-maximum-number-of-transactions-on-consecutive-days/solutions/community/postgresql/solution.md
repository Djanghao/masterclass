# Using GAPS and ISLAND with CTE and Window Functions

**Author:** nireddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/5971588/](https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/5971588/)

---

# Code
```postgresql []
-- Write your PostgreSQL query statement below

WITH consecutive_groups_cte AS
(
    SELECT
        transaction_id,
        customer_id,
        DATE_PART('EPOCH', transaction_date)/(60 * 60 * 24) -  ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY transaction_date) AS consecutive_group,
        amount
    FROM
        Transactions
),

consecutive_day_count_cte AS
(   
    SELECT
        customer_id,
        COUNT(transaction_id) AS consecutive_days_count
    FROM
        consecutive_groups_cte
    GROUP BY
        customer_id, consecutive_group
)

SELECT
    customer_id
FROM
    consecutive_day_count_cte
WHERE
    consecutive_days_count = (SELECT MAX(consecutive_days_count) FROM consecutive_day_count_cte)
ORDER BY
    customer_id


```