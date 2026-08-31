# MySQL simple solution with detailed explanation

**Author:** Cathy221
**Votes:** 7
**Link:** [https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/2234163/](https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/2234163/)

---

First we creat a cte, in which contains information for each product in each year, how many times it is purchased.
Then we filter products which are purchsed 3 or more times.

```
with cte as
    (select product_id
         , substring(purchase_date,1,4) as purchase_year
         , count(distinct order_id) as num_orders
    from orders
    group by 1,2
    having num_orders>=3
    )
 ```
 
 Then we self join the cte by leading the year by 1, so that only those products which are sold >3 times in 2 consecutive years are joined.
 Remember to select the distinct product_id.
 
 ```
select distinct c1.product_id
from cte c1
join cte c2 on c1.product_id = c2.product_id and c1.purchase_year+1 = c2.purchase_year
```