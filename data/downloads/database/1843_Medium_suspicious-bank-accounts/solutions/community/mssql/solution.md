# MSSQL - using cte, dateadd and join

**Author:** Flash017
**Votes:** 4
**Link:** [https://leetcode.com/problems/suspicious-bank-accounts/solutions/3298977/](https://leetcode.com/problems/suspicious-bank-accounts/solutions/3298977/)

---


# Code
```
/* Write your T-SQL query statement below */
with cte_temp as (select t.account_id, 
        format(t.day, 'yyyy-MM-01') as month, 
        sum(t.amount) as income
    from Transactions t
    where t.type = 'Creditor'
    group by t.account_id, format(t.day, 'yyyy-MM-01')
),
cte_max as (
    select a.account_id, c.month
    from cte_temp c
    join Accounts a
    on c.account_id = a.account_id
    where c.income > a.max_income
)
select distinct c1.account_id
from cte_max c1
join cte_max c2
on c1.month = DATEADD(month, 1, c2.month)
and c1.account_id = c2.account_id
```