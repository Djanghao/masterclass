# Super simple MySQL using LAG function

**Author:** Antarab
**Votes:** 11
**Link:** [https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/1915365/](https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/1915365/)

---

```
select  distinct user_id
from
( select user_id, purchase_date,
lag(purchase_date) over (partition by user_id order by purchase_date) prev_purchase_date
from purchases) t
where datediff(purchase_date, prev_purchase_date) <=7
```