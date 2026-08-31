# Simple mysql union and sum

**Author:** ycwu3536
**Votes:** 3
**Link:** [https://leetcode.com/problems/monthly-transactions-ii/solutions/1686101/](https://leetcode.com/problems/monthly-transactions-ii/solutions/1686101/)

---

First do a left join to Chargebacks to get the country, and amount from Transactions. Then union all with all the approved from Trasactions.

Then query the union table to get the sum of approved_count, approved_amount, chargeback_count, and chargeback_amount.

```
with cte as
(
select a.trans_id as id, b.country, 'chargeback' as state, b.amount, date_format(a.trans_date,'%Y-%m') as month from Chargebacks a
left join Transactions b
on a.trans_id = b.id
union all
select id, country, state, amount, date_format(trans_date,'%Y-%m') as month
from Transactions
where state = 'approved'
)

select month,
country,
sum(if(state = 'approved', 1, 0)) as approved_count,
sum(if(state = 'approved', amount, 0)) as approved_amount,
sum(if(state = 'chargeback', 1, 0)) as chargeback_count,
sum(if(state = 'chargeback', amount, 0)) as chargeback_amount
from cte
group by 1, 2
```