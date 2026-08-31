# Oracle Fast Solution | Faster than 100% | Window Function

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/account-balance/solutions/1837910/](https://leetcode.com/problems/account-balance/solutions/1837910/)

---

```
select account_id, to_char(day) day, sum(case when type ='Deposit' then 1 else -1 end * amount ) over (partition by account_id order by day asc) balance
from transactions 
order by 1,2
```