# MYSQL : WITH CTE + MAX() + AVG() . Good Luck 👍✨

**Author:** ashlyjoseph
**Votes:** 5
**Link:** [https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/2440702/](https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/2440702/)

---

```
**# Write your MySQL query statement below

/**
One table: OrdersDetails
(order_id, product_id) is the primary key for OrdersDetails table.
A single order is represented as multiple rows, one row for each product in the order.
OrdersDetails table contains the quantity ordered of the product product_id in the order order_id.

imbalanced orders:: maximum quantity is strictly greater than the average quantity of every order (including itself).

 The average quantity of an order is calculated as (total quantity of all products in the order) / (number of different products in the order). 
 The maximum quantity of an order is the highest quantity of any single product in the order.
 
PROBLEM: 
    find the order_id of all imbalanced orders

STEPS:
    WITH CTE
    GROUP BY order_id
    maximum quantity of an order : MAX(quantity)
    average quantity of an order : SUM(quantity)/COUNT(product_id) 
    WHERE condition MaxQuantity < Find the MAX value of the average quntity of the order.
*/

WITH CTE AS
(
SELECT
    order_id,
    product_id,
    quantity,
    MAX(quantity) AS MaxQuantity,
    SUM(quantity)/COUNT(product_id) AS AvgQuantity
FROM OrdersDetails
GROUP BY order_id

)
SELECT 
    order_id
FROM CTE
WHERE MaxQuantity > (Select MAX(AvgQuantity) FROM CTE)**
```