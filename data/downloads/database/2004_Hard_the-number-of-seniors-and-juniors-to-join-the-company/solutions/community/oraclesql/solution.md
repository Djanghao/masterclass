# Easy Oracle

**Author:** s_bikk
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/1883454/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/1883454/)

---

```
with main_query as (
select 
employee_id, experience, salary, 
sum(salary) over (partition by experience order by experience desc, salary, employee_id) as cum_sum
from candidates) 

select 'Senior' as experience, count(*) as accepted_candidates from main_query where experience='Senior' and cum_sum <= 70000 
union
select 'Junior' as experience, count(*) as accepted_candidates from main_query where experience='Junior' and cum_sum <= 
    (select 70000-nvl(max(cum_sum),0) from main_query where experience='Senior' and cum_sum <= 70000) 
```