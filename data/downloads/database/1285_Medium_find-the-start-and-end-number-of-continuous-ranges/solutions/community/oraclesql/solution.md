# Oracle Easy to Understand Solution

**Author:** minabeshay
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/solutions/1508660/](https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/solutions/1508660/)

---

The essential idea is to find a grouping for the consecutive numbers, the initutive idea is to generate another consecutive range and get the difference. 

```
with consecutive_groups as (
    select log_id, log_id - rank() over (order by log_id) grp 
    from logs 
)
select min(log_id) start_id, max(log_id) end_id
from consecutive_groups 
group by grp
order by 1
```