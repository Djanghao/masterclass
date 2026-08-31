# Without using any fancy Keyword || Simple JOINs used ✅✅

**Author:** Lil_ToeTurtle
**Votes:** 9
**Link:** [https://leetcode.com/problems/product-sales-analysis-iii/solutions/3636409/](https://leetcode.com/problems/product-sales-analysis-iii/solutions/3636409/)

---

# Code
```
select s.product_id, s.year as first_year, s.quantity, s.price
from Sales s
join (select product_id, min(year) as year from sales group by product_id) ss
on s.product_id = ss.product_id and s.year = ss.year
```