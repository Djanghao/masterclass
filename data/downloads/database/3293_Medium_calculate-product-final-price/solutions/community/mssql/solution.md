# SQL solution - Products LEFT OUTER JOIN Discounts + easy calculation

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-product-final-price/solutions/5802521/](https://leetcode.com/problems/calculate-product-final-price/solutions/5802521/)

---

# Approach
The two input tables include a simple fact table, `Products`, and a dimension-like table, `Discounts`, with category being the common field.  Since a category in Products may not exist in Discounts, perform a LEFT OUTER JOIN, joining Discounts to Products.  This outer join will return null for categories that do not have a discount, so use coalesce() to mask those nulls as discounts of 0.  With a discount percentage (or 0) joined to each product, use math to calculate the final price: $final\\_price = product\\_price * \\frac{100 - discount}{100}$.

# Code
```Oracle []
select Products.product_id,
Products.price * (100 - coalesce(Discounts.discount, 0)) / 100 as final_price,
Products.category
from Products
LEFT OUTER JOIN Discounts
on Products.category = Discounts.category
order by 1
```
```MySQL []
# Write your MySQL query statement below

select Products.product_id,
(Products.price + 0.0) * (100 - coalesce(Discounts.discount, 0)) / 100 as final_price,
Products.category
from Products
LEFT OUTER JOIN Discounts
on Products.category = Discounts.category
order by 1
```
```MSSQL []
/* Write your T-SQL query statement below */

select Products.product_id,
(Products.price + 0.0) * (100 - coalesce(Discounts.discount, 0)) / 100 as final_price,
Products.category
from Products
LEFT OUTER JOIN Discounts
on Products.category = Discounts.category
order by 1
```
```Postgres []
-- Write your PostgreSQL query statement below

select Products.product_id,
(Products.price + 0.0) * (100 - coalesce(Discounts.discount, 0)) / 100 as final_price,
Products.category
from Products
LEFT OUTER JOIN Discounts
on Products.category = Discounts.category
order by 1
```