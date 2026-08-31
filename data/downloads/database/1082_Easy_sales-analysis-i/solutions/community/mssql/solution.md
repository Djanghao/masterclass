# CTE no join beats 98%

**Author:** neilmcguigan
**Votes:** 1
**Link:** [https://leetcode.com/problems/sales-analysis-i/solutions/4074453/](https://leetcode.com/problems/sales-analysis-i/solutions/4074453/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
you don't even need to join the other table


# Code
```
with x as (
    select
        seller_id,
        sum(price) as the_sum
    from Sales
    group by
        seller_id
)
select top 1 with ties 
    seller_id 
from x 
order by 
    the_sum desc
```