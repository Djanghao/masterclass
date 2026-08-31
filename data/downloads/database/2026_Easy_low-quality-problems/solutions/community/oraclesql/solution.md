# Oracle 100% faster.

**Author:** saiyarra
**Votes:** 0
**Link:** [https://leetcode.com/problems/low-quality-problems/solutions/2305429/](https://leetcode.com/problems/low-quality-problems/solutions/2305429/)

---

```
select problem_id from 
(select case when ((likes*100)/(likes+dislikes))<60 then problem_id else null end as problem_id
from problems) a
where problem_id is not null
order by 1;
```