# lead(), and datefidd()

**Author:** wu1bocheng
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-active-users/solutions/3708252/](https://leetcode.com/problems/find-active-users/solutions/3708252/)

---

# Code
```
/* Write your T-SQL query statement below */
select distinct user_id from
(select distinct user_id,
datediff(day,created_at,lead(created_at) over (partition by user_id order by created_at asc)) as diff
from users) a
where a.diff <=7
```