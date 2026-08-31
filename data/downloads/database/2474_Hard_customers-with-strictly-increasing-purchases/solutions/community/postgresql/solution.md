# PostgreSQL Solution - Beats 100%

**Author:** SidYadav20
**Votes:** 1
**Link:** [https://leetcode.com/problems/customers-with-strictly-increasing-purchases/solutions/5054607/](https://leetcode.com/problems/customers-with-strictly-increasing-purchases/solutions/5054607/)

---

# Solution
```
-- Write your PostgreSQL query statement below
WITH cte AS (
    SELECT
        customer_id,
        DATE_PART('year',order_date) AS year,
        DATE_PART('year',order_date) - RANK() OVER (PARTITION BY customer_id ORDER BY SUM(price)) AS yr_rnk_diff
    FROM
        Orders
    GROUP BY
        1, 2
)
SELECT
    customer_id
FROM
    cte
GROUP BY
    customer_id
HAVING
    COUNT(DISTINCT yr_rnk_diff) = 1
```