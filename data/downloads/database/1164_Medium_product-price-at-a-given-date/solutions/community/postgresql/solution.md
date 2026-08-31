# ✅✅ 100% EASY AND SIMPLE SOLUTION || PostgreSQL || UNION ✅✅

**Author:** jamshidbekml
**Votes:** 13
**Link:** [https://leetcode.com/problems/product-price-at-a-given-date/solutions/5319143/](https://leetcode.com/problems/product-price-at-a-given-date/solutions/5319143/)

---

# Code
```
-- Write your PostgreSQL query statement below
select
    distinct product_id,
    10 as price
from
    Products
group by
    product_id
having
    min(change_date) > '2019-08-16'

union

select
    product_id,
    new_price as price
from
    Products
where
    (product_id, change_date) in (
        select
            product_id,
            max(change_date)
        from
            Products
        where
            change_date <= '2019-08-16'
        group by
            product_id
        )
```

![photo_2024-06-06_04-49-51 (2).jpg](./images/0.jpeg)
