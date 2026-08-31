# (trunc(signup_date) - trunc(action_date)) = -1 does the trick

**Author:** ahsanpz
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-day-verification/solutions/5576921/](https://leetcode.com/problems/second-day-verification/solutions/5576921/)

---

# Code
```
/* Write your PL/SQL query statement below */
select a.user_id
from emails a inner join texts b on a.email_id = b.email_id and (trunc(signup_date) - trunc(action_date)) = -1
where b.signup_action = 'Verified'
order by 1
```