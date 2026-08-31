# Oracle | Union All + Case When | Easy Solution

**Author:** TK-X
**Votes:** 2
**Link:** [https://leetcode.com/problems/monthly-transactions-ii/solutions/2193205/](https://leetcode.com/problems/monthly-transactions-ii/solutions/2193205/)

---

```
select month, country, approved_count, approved_amount, chargeback_count, chargeback_amount
from(
    select distinct month,
        country, 
        sum(case when state = 'approved' then 1 else 0 end) approved_count,
        sum(case when state = 'approved' then amount else 0 end) approved_amount,
        sum(case when state = 'cb' then 1 else 0 end) chargeback_count,
        sum(case when state = 'cb' then amount else 0 end) chargeback_amount
    from(
        select t.id, t.country\uFF0C'cb' state ,amount, to_char(c.trans_date, 'YYYY-MM') month
        from Transactions t
        inner join Chargebacks c
        on t.id = c.trans_id
        union all 
        select id, country, state, amount, to_char(trans_date, 'YYYY-MM') month
        from Transactions
    )
    group by month, country
)
where not (approved_count = 0 and approved_amount = 0 and chargeback_count = 0 and chargeback_amount = 0);
```