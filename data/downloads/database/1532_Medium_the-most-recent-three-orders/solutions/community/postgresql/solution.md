# RANK() Solution

**Author:** iamkonstantin
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-most-recent-three-orders/solutions/6068948/](https://leetcode.com/problems/the-most-recent-three-orders/solutions/6068948/)

---

# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT name as customer_name,
       customer_id,
       order_id,
       order_date
FROM (
    SELECT *,
    RANK() OVER(PARTITION BY customer_id 
                ORDER BY order_date DESC) as r
    FROM Orders JOIN Customers USING(customer_id)
)
WHERE r <= 3
ORDER BY 1, 2, 4 DESC
```