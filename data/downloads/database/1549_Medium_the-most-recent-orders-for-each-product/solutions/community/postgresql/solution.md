# DENSE_RANK() Solution

**Author:** iamkonstantin
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/6066831/](https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/6066831/)

---

# Code
```postgresql []
SELECT product_name,product_id,order_id, order_date
FROM (
    SELECT *,
       DENSE_RANK() OVER(PARTITION BY product_id 
                         ORDER BY order_date DESC) as tor
    FROM Orders JOIN Products USING(product_id)
)
WHERE tor = 1
ORDER BY 1, 2, 3
```