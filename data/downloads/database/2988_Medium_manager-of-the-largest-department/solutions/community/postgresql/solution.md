# count() over() + where; no join simple solution

**Author:** tsung_pct
**Votes:** 0
**Link:** [https://leetcode.com/problems/manager-of-the-largest-department/solutions/6031934/](https://leetcode.com/problems/manager-of-the-largest-department/solutions/6031934/)

---


```postgresql []
with cnts as (
    -- count dep size
    select 
        emp_name, 
        dep_id, position, 
        count(dep_id) over(partition by dep_id) as "cnt"
    from Employees
)

select emp_name as "manager_name", dep_id
from cnts
where cnt = (select max(cnt) from cnts)
    and position = 'Manager'
order by 2


```