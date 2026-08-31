# Beats 99% - Dont make things hard for yourself.

**Author:** andy3545
**Votes:** 0
**Link:** [https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/6086578/](https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/6086578/)

---



# Code
```postgresql []
-- Write your PostgreSQL query statement below


with yearly_orders AS (
    SELECT
        EXTRACT(YEAR FROM purchase_date) AS order_year,
        product_id
    FROM Orders
    GROUP BY 1,2
    HAVING COUNT(1) >= 3
)

SELECT A.product_id
FROM yearly_orders A
JOIN yearly_orders B
ON A.product_id = B.product_id 
AND A.order_year = B.order_year-1
GROUP BY 1
```