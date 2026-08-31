# Easy Solution

**Author:** FoRomik
**Votes:** 0
**Link:** [https://leetcode.com/problems/products-worth-over-invoices/solutions/5775053/](https://leetcode.com/problems/products-worth-over-invoices/solutions/5775053/)

---

# Code
```postgresql []
-- Write your PostgreSQL query statement below
with cte as (
    select 
        a.name,
        coalesce(sum(b.rest), 0) as rest,
        coalesce(sum(b.paid), 0) as paid,
        coalesce(sum(b.canceled), 0) as canceled,
        coalesce(sum(b.refunded), 0) as refunded
    from product a left join invoice b on a.product_id=b.product_id
    group by a.name
    order by a.name
)

select * from cte;
```