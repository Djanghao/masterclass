# Simple MS SQL Solution, Beats 86.01%

**Author:** Kristina_m
**Votes:** 14
**Link:** [https://leetcode.com/problems/percentage-of-users-attended-a-contest/solutions/5552425/](https://leetcode.com/problems/percentage-of-users-attended-a-contest/solutions/5552425/)

---

# Code
```
/* Write your T-SQL query statement below */
select contest_id, 
round(count(user_id) * 100.0 / (select count(user_id) from Users), 2) as percentage
from Register
group by contest_id
order by percentage desc, contest_id;
```
![\u0421\u043D\u0438\u043C\u043E\u043A \u044D\u043A\u0440\u0430\u043D\u0430 2024-07-29 \u0432 12.00.00.png](./images/0.png)
