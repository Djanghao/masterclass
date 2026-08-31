# MySQL, Oracle & SQL Server - Fast Solution

**Author:** Akshay_Coder
**Votes:** 3
**Link:** [https://leetcode.com/problems/bank-account-summary-ii/solutions/950169/](https://leetcode.com/problems/bank-account-summary-ii/solutions/950169/)

---

```
select
name,sum(amount) balance
from
Transactions t
join users u
on t.account=u.account
group by name
having sum(amount)>10000