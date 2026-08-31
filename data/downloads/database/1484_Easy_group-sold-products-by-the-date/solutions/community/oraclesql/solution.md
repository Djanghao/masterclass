# All DBs, simple solution

**Author:** yurokusa
**Votes:** 49
**Link:** [https://leetcode.com/problems/group-sold-products-by-the-date/solutions/845705/](https://leetcode.com/problems/group-sold-products-by-the-date/solutions/845705/)

---

Oracle
```
select to_char(a.sell_date, 'yyyy-mm-dd') sell_date
    , count(a.product) num_sold
    , listagg(a.product, ',') within group(order by a.product) products
from (select distinct * from activities) a
group by a.sell_date
order by a.sell_date
```
My SQL
```
select sell_date
	, count(distinct product) num_sold
	, group_concat(distinct product order by product asc separator ',') products
from activities
group by sell_date
order by sell_date
```
MS SQL
```
select a.sell_date
   , count(a.product) num_sold
   , string_agg(a.product,',') within group (order by a.product) products
from (select distinct sell_date,product from activities) a
group by a.sell_date
order by a.sell_date
```