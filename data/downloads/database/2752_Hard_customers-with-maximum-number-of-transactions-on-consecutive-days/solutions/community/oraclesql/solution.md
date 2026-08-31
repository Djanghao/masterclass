# Faster than 100%, easy to understand!

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/4405789/](https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/4405789/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuitive thinking is to group the customers into groups of consecutive days of making transactions
# Approach
<!-- Describe your approach to solving the problem. -->
This can be achieved by adding a sequence (1,2,3,4,...) then the difference of dates and this sequence will result in groups of the consecutive days. 

The rest is trivial to find the customers with the maximium number of transactions.

# Code
```
/* Write your PL/SQL query statement below */
with consecutive_transactions as (
    select customer_id, 
           count(*) number_of_txns,
           rank() over (order by count(*) desc) as rnk 
    from (
        select customer_id, 
                transaction_date - row_number() over (partition by customer_id order by transaction_date asc) as trxn_grp
        from transactions 
    ) 
    group by customer_id, trxn_grp
)
select customer_id from consecutive_transactions where rnk = 1 order by 1 asc 
```