# Simple solution with recursion

**Author:** YuB85
**Votes:** 1
**Link:** [https://leetcode.com/problems/bitwise-user-permissions-analysis/solutions/5399557/](https://leetcode.com/problems/bitwise-user-permissions-analysis/solutions/5399557/)

---


# Code
```
/* Write your T-SQL query statement below */
with tmp as
(
    select   permissions
            ,row_number() over(order by user_id asc) as rn
    from user_permissions
)
,recur_cte as
(
    select   permissions as common_perms 
            ,permissions as any_perms   
            ,1 as iter
            ,rn
    from tmp
    where rn = 1
    union all
    select   t.permissions & r.common_perms
            ,t.permissions | r.any_perms
            ,r.iter + 1
            ,t.rn
    from recur_cte r
        join tmp t on r.iter + 1 = t.rn
)
select   common_perms
        ,any_perms
from recur_cte
where rn = (select max(rn) from recur_cte)
```