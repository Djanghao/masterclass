# left join

**Author:** user1827su
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-product-final-price/solutions/5948755/](https://leetcode.com/problems/calculate-product-final-price/solutions/5948755/)

---



# Code
```mysql []
# Write your MySQL query statement below

SELECT 
    product_id,
    IFNULL(price * (1-discount/100), price) AS final_price,
    p.category
FROM Products p 
LEFT JOIN Discounts d 
ON p.category = d.category
```