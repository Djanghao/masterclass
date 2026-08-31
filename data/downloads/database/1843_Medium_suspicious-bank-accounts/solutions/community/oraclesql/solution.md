# Oracle Solution

**Author:** sarthakmohapatra
**Votes:** 2
**Link:** [https://leetcode.com/problems/suspicious-bank-accounts/solutions/1375185/](https://leetcode.com/problems/suspicious-bank-accounts/solutions/1375185/)

---

```
with trans_cte
as
(
    select account_id, trunc(day, 'month') mon,
        sum(case when type = 'Creditor' then amount
                when type = 'Debtor' then 0
           end) tot
        from transactions
    group by account_id, trunc(day, 'month')
)

select distinct t1.account_id
    from trans_cte t1, trans_cte t2,accounts a
        where t1.account_id = t2.account_id
            and t1.mon = t2.mon + interval '1' month 
            and a.account_id = t1.account_id
            and t1.tot > a.max_income
            and t2.tot > a.max_income
```