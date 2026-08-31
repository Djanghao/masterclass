# Easy oracle solution

**Author:** saiyarra
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-v/solutions/2351555/](https://leetcode.com/problems/product-sales-analysis-v/solutions/2351555/)

---

```
select user_id,sum(quantity*price) spending
from sales s inner join product p on p.product_id=s.product_id
group by user_id
order by spending desc, user_id asc;
```