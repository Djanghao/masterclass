# Easy to follow, solution with explanation.

**Author:** lalakoko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-transaction-each-day/solutions/5869655/](https://leetcode.com/problems/maximum-transaction-each-day/solutions/5869655/)

---

# Approach
To start, here the attribute `transactions.day` is a `datetime` but only the `date` part is required for this problem.

To solve this problem, either we find the maximum amount per day and then inner join w/ the `transactionss` table on the maximimum amount per day and the date, or we rank the entries w/ `dense_rank()` on their amount per date.

# Code
```mssql []
-- #1 plain SQL
select t.transaction_id
from transactions as t
    inner join (
        select cast(t.day as date) as transaction_date, max(amount) as mx_dt_amnt
        from transactions as t
        group by cast(t.day as date)
    ) tt
    on t.amount = tt.mx_dt_amnt and cast(t.day as date) = tt.transaction_date
order by t.transaction_id

-- #2 dense_rank() window function
select t.transaction_id
from (
    select *
        , dense_rank() over(partition by cast(t.day as date) order by t.amount desc) as rnk
    from transactions as t
) as t
where t.rnk = 1
order by t.transaction_id
```