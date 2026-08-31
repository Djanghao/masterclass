# Easy CTE Solution

**Author:** raksha18
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-iv/solutions/5970493/](https://leetcode.com/problems/product-sales-analysis-iv/solutions/5970493/)

---

with cte_t as (
select s.product_id, user_id, sum(quantity*price) as spending,
dense_rank() over (partition by user_id order by sum(quantity*price) desc) as rank
from Sales as s
left join Product as p
on s.product_id = p.product_id  
group by 1,2
) 

select user_id, product_id 
from cte_t 
where rank = 1
```