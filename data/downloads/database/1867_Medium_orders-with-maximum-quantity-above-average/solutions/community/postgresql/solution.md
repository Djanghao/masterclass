# Easy solution - No window functions.

**Author:** andy3545
**Votes:** 0
**Link:** [https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/6083252/](https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/6083252/)

---


# Code
```postgresql []
-- Write your PostgreSQL query statement below



WITH order_stats as (
    SELECT 
        ORDER_ID,
        MAX(quantity) as max_order_quantity,
        AVG(quantity) as avg_order_quantity
    FROM OrdersDetails
    GROUP BY 1
)

SELECT ORDER_ID 
FROM order_stats
WHERE max_order_quantity > (SELECT MAX(avg_order_quantity) FROM order_stats)
```