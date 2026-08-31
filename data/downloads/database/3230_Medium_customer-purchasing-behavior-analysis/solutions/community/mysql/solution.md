# MySQL

**Author:** Prachi_404
**Votes:** 1
**Link:** [https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/5877052/](https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/5877052/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```mysql []
# Write your MySQL query statement below
WITH joined AS (
    SELECT 
        t.transaction_id,
        t.customer_id,
        p.product_id,
        t.transaction_date,
        t.amount,
        p.category,
        p.price
    FROM 
        transactions t
    INNER JOIN 
        products p ON t.product_id = p.product_id
),

amount_count AS (
    SELECT 
        customer_id,
        ROUND(SUM(amount), 2) AS total_amount,
        COUNT(transaction_id) AS transaction_count,
        COUNT(DISTINCT category) AS unique_categories,
        ROUND(SUM(amount)/COUNT(transaction_id), 2) AS avg_transaction_amount,
        ROUND((COUNT(transaction_id) * 10) + (SUM(amount) / 100), 2) AS loyalty_score
    FROM 
        joined
    GROUP BY 
        customer_id
),

top_category AS (
    SELECT 
        customer_id,
        category,
        DENSE_RANK() OVER (PARTITION BY customer_id ORDER BY COUNT(*) DESC, MAX(transaction_date) DESC) AS rn
    FROM 
        joined
    GROUP BY 
        customer_id, category
)

SELECT 
    ac.customer_id, 
    ac.total_amount, 
    ac.transaction_count, 
    ac.unique_categories, 
    ac.avg_transaction_amount, 
    tc.category AS top_category, 
    ac.loyalty_score
FROM 
    amount_count ac
LEFT JOIN 
    top_category tc ON ac.customer_id = tc.customer_id
WHERE 
    tc.rn = 1
ORDER BY 
    ac.loyalty_score DESC, ac.customer_id ASC;

```