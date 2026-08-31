# 1 cte, beats 100%

**Author:** Yash_Poddar
**Votes:** 0
**Link:** [https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/6036294/](https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/6036294/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
need no of orders for this year and next year 


# Approach
<!-- Describe your approach to solving the problem. -->

get no of orders for this year and next year in same column
, the next year orders can be calculated with subquery

# Code
```mssql []
/* Write your T-SQL query statement below */
with aa as (select product_id, datepart(year,o.purchase_date) as year, count(*) as corders, (Select count(*) from orders n where datepart(year,n.purchase_date)=datepart(year,o.purchase_date)+1 AND n.product_id=o.product_id) as norders
from orders o
group by product_id,datepart(year,purchase_date) )

Select Product_id from aa where
corders>=3 AND norders>=3
group by Product_id

    
```