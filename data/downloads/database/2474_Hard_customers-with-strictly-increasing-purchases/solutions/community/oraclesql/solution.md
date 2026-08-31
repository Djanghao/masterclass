# Window function

**Author:** pllsindhu
**Votes:** 1
**Link:** [https://leetcode.com/problems/customers-with-strictly-increasing-purchases/solutions/3070180/](https://leetcode.com/problems/customers-with-strictly-increasing-purchases/solutions/3070180/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your PL/SQL query statement below */

with tbl as (
select customer_id,extract(year from order_date) order_year,sum(price) as total_sale
from Orders
group by  customer_id,extract(year from order_date)
)
, tbl2 as(
select 
customer_id,
total_sale,
order_year,
lag(order_year) over (partition by customer_id order by order_year asc) as lag_year,
rank() over (partition by customer_id order by order_year asc) as year_rank,
rank() over (partition by customer_id order by total_sale asc) as year_sale
from tbl
)

select 
customer_id
from(
select 
customer_id,
max(case when LAG_YEAR is not null then ORDER_YEAR-LAG_YEAR else ORDER_YEAR-ORDER_YEAR end) as max_dif_lag,
max(year_rank-year_sale) as max_dif_rank
from tbl2
group by customer_id
)
where max_dif_lag<=1
and max_dif_rank=0



```