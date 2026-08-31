# MS SQL | DENSE_RANK() | 93.55% beats

**Author:** ShakhDev
**Votes:** 3
**Link:** [https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/3071446/](https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/3071446/)

---


# Code
```
/* Write your T-SQL query statement below */
SELECT order_id, customer_id, order_type
FROM ( 
        SELECT *, DENSE_RANK() OVER(PARTITION BY customer_id ORDER BY order_type) AS rk FROM Orders
        ) t
WHERE rk = 1
```