# rank() Solution with Explanation

**Author:** adityajhanwar
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/1125819/](https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/1125819/)

---


```
with cte_ranks as (
    select 
        customer_id,
        product_id,
        product_name,
        rank() over (
                partition by customer_id
                order by count(order_id) desc) as rnk
    from Orders join Products using(product_id)
    group by 1, 2, 3
)

select 
    customer_id,
    product_id,
    product_name
from cte_ranks
where rnk = 1
order by 1, 2
```

We want to join `Orders` and `Products` to get the associated names of each product. Inner join will suffice since we are only concerned about orders placed. We also want to get counts of  `(customer_id, product_id)` to determine how many orders were placed for each combination. Using `rank()`, we can take this a step further and assign ranks to each count. 

We group by `customer_id` and `product_id` to get the count of orders a customer placed for a certain item. We then use `rank()` partioned only on `customer_id` because we want to compare these product counts for each customer only. If we partition on `customer_id` and `product_id`, we would get ranks of 1 for everything. If we didn't partition on anything, we would only be getting ranks for the most ordered product by a customer overall.

The biggest trick here is that you can use some window functions like `rank()`, `dense_rank()` and `row_number()` to compare aggregate values.
