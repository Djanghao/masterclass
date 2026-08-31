# SQL solution

**Author:** yucan29
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-product-final-price/solutions/5851670/](https://leetcode.com/problems/calculate-product-final-price/solutions/5851670/)

---

```
select 
    product_id,
    ( price - price * nvl(discount,0)/100 ) as final_price, 
    p.category
from Products p 
left outer join Discounts d
on
    p.category = d.category
order by 
    1;
```