# MSSQL | 100% faster

**Author:** darshspatel
**Votes:** 1
**Link:** [https://leetcode.com/problems/market-analysis-ii/solutions/1524993/](https://leetcode.com/problems/market-analysis-ii/solutions/1524993/)

---

```

/* Write your T-SQL query statement below */



with cte as (

select seller_id,
    item_brand,
    row_number() over (partition by seller_id order by order_date) as rnum
    from
    orders o
    inner join
    items i
    on o.item_id = i.item_id
)

select 
user_id as seller_id,
case when c.seller_id is null then 'no' else 'yes' end as "2nd_item_fav_brand"
from 
users u
left join
cte c
on seller_id = user_id
and favorite_brand = item_brand
and rnum = 2
```