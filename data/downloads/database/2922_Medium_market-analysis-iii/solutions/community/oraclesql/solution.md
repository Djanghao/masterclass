# Clear solution in oracle using CTE, Join and Rank

**Author:** roadytom
**Votes:** 1
**Link:** [https://leetcode.com/problems/market-analysis-iii/solutions/5908995/](https://leetcode.com/problems/market-analysis-iii/solutions/5908995/)

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
```oraclesql []
/* Write your PL/SQL query statement below */
with cte as (select 
    distinct u.seller_id, 
    count(distinct o.item_id) as num_items
from users u 
    join orders o on u.seller_id=o.seller_id
    join items i on o.item_id=i.item_id
where 
    u.favorite_brand!=i.item_brand
group by u.seller_id),
rank_cte as (
    select seller_id, 
           num_items,
           dense_rank()over (order by num_items desc) as rnk
    from cte
) 
select seller_id, num_items
from rank_cte
where rnk=1
order by seller_id
```