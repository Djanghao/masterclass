# PostgreSQL Solution

**Author:** vm2020
**Votes:** 0
**Link:** [https://leetcode.com/problems/market-analysis-ii/solutions/6028588/](https://leetcode.com/problems/market-analysis-ii/solutions/6028588/)

---


# Code
```postgresql []
-- Write your PostgreSQL query statement below
with cte as 
(
select a.seller_id, a.order_date, a.item_id, b.item_brand, dense_rank() over (partition by seller_id order by order_date) as drn , count(a.item_id) over (partition by seller_id) as total_sold_cnt
from Orders a left join Items b 
on a.item_id = b.item_id
)
select b.user_id as seller_id, case when (a.item_brand = b.favorite_brand and total_sold_cnt >= 2) then 'yes'  else 'no' end as "2nd_item_fav_brand"  from users b left join cte a on 
b.user_id = a.seller_id 
and a.drn = 2  ;
```