# faster than 97% - simple and sweet

**Author:** bat_
**Votes:** 1
**Link:** [https://leetcode.com/problems/product-sales-analysis-ii/solutions/986222/](https://leetcode.com/problems/product-sales-analysis-ii/solutions/986222/)

---

select product_id, sum(quantity) total_quantity 
from Sales
group by product_id