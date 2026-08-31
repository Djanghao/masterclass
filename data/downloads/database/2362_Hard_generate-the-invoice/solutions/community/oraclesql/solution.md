# SUBQUERRY

**Author:** iliyas1903
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-the-invoice/solutions/6105227/](https://leetcode.com/problems/generate-the-invoice/solutions/6105227/)

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
```oraclesql []
SELECT 
    pr1.product_id AS product_id, 
    pr1.quantity AS quantity,
    pr1.quantity*pro2.price AS price
FROM Purchases pr1
JOIN Products pro2 
    ON pro2.product_id = pr1.product_id 
JOIN (
    SELECT 
        MIN(invoice_id) AS min_invoice 
    FROM (
        SELECT 
            t.invoice_id,
            SUM(t.price * t.quantity) AS sum_price
        FROM (
            SELECT 
                p2.invoice_id,
                p2.product_id,
                p2.quantity,
                p1.price 
            FROM purchases p2
            LEFT JOIN products p1
                ON p2.product_id = p1.product_id
        ) t
        GROUP BY t.invoice_id
        HAVING SUM(t.price * t.quantity) = (
            SELECT MAX(sum_price)
            FROM (
                SELECT 
                    t.invoice_id,
                    SUM(t.price * t.quantity) AS sum_price
                FROM (
                    SELECT 
                        p2.invoice_id,
                        p2.product_id,
                        p2.quantity,
                        p1.price
                    FROM purchases p2
                    LEFT JOIN products p1
                        ON p2.product_id = p1.product_id
                ) t
                GROUP BY t.invoice_id
            )
        )
    )
) k
ON k.min_invoice = pr1.invoice_id;

```