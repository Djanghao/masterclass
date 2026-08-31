# Postgres : Using CTE and Rank

**Author:** anuraganand789
**Votes:** 1
**Link:** [https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/5966202/](https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/5966202/)

---

# Code
```postgresql []
-- Write your PostgreSQL query statement below

with TransactionsProductsJoinTable as (
    select * from transactions inner join products using(product_id)
),
FrequentCategory as (
        select 
        customer_id
        , category
        , count(*) as Freq
    , max(transaction_date) as latest_trans_date
    , rank() over(partition by customer_id order by count(*) desc, max(transaction_date) desc) as rank
        from TransactionsProductsJoinTable
        group by customer_id, category
        order by customer_id, Freq desc, latest_trans_date desc
)
Select 
    customer_id
    , round(sum(amount), 2) as total_amount
    , count(transaction_id) as transaction_count
    , count(distinct category) as  unique_categories
    , round(avg(amount), 2) as avg_transaction_amount
    , (
        select category from FrequentCategory fc where fc.rank = 1 and fc.customer_id = t.customer_id
    ) as top_category
    , round(((count(transaction_id) * 10) + (round(sum(amount), 2)::numeric / 100) ), 2) as loyalty_score
from TransactionsProductsJoinTable t
group by customer_id
order by loyalty_score desc, customer_id

```