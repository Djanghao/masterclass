# Easy Oracle Solution beats 100%

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/5992115/](https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/5992115/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
with cust_trans_cte as
(select customer_id, round(sum(amount), 2) as total_amount, count(transaction_id) as transaction_count, count(distinct category) as unique_categories, round(avg(amount), 2) as avg_transaction_amount, round((count(transaction_id) * 10) + (sum(amount)/ 100), 2) as loyalty_score
from Transactions t join Products p
on t.product_id = p.product_id
group by customer_id),
category_count_cte as
(select customer_id, category, count(transaction_id) as transaction_count, max(transaction_date) as transaction_date
from Transactions t join Products p
on t.product_id = p.product_id
group by customer_id, category),
top_category_cte as
(select customer_id, category, transaction_count, transaction_date, rank() over (partition by customer_id order by transaction_count desc, transaction_date desc) as category_rnk
from category_count_cte)
select ct.customer_id, total_amount, ct.transaction_count, unique_categories, avg_transaction_amount, tp.category as top_category, loyalty_score
from cust_trans_cte ct join top_category_cte tp
on ct.customer_id = tp.customer_id
where tp.category_rnk = 1
order by loyalty_score desc, ct.customer_id;
```