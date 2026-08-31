# Easy solution using rank, no cte, one subquery

**Author:** little_explorer
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/5918217/](https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/5918217/)

---

# Intuition
First, rank the `product_id`s based on their counts for each `customer_id`. Wrap this in a subquery. 
Then, join it with `products` and select the `customer_id`, `product_id` and `product_name` that has the top rank. 


# Approach
See query. 

# Complexity
- Time complexity:
O(NLogN)

- Space complexity:
O(N)

# Code
```postgresql []
-- Write your PostgreSQL query statement below

select 
    customer_id, 
    t.product_id, 
    product_name 
from (
        select 
            customer_id, 
            product_id, 
            rank() over (partition by customer_id order by count(*) desc) as rnk 
        from 
            orders
        group by 
            customer_id, product_id
    ) t 
join 
    products p
using 
    (product_id) 
where 
    rnk = 1;
```