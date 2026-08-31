# Easy Oracle solution without using Window functions

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/5911447/](https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/5911447/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select distinct order_id
from OrdersDetails
where quantity > (select max(avg(quantity)) as order_avg
                    from OrdersDetails
                    group by order_id);
```