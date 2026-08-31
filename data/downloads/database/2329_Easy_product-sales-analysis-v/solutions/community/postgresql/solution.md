# PostgreSQL Solution

**Author:** vm2020
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-v/solutions/5980386/](https://leetcode.com/problems/product-sales-analysis-v/solutions/5980386/)

---



# Code
```postgresql []
-- Write your PostgreSQL query statement below
select a.user_id, sum(a.quantity * b.price) as spending 
from Sales a left join Product b 
on a.product_id = b.product_id
group by 1
order by 2 desc,1;

```