# An Oracle solution

**Author:** yucan29
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-calls/solutions/5838845/](https://leetcode.com/problems/find-longest-calls/solutions/5838845/)

---

```
select
    first_name,
    type,   
    lpad( floor(duration/60/60),          2,'0' ) || ':' || 
    lpad( floor(mod(duration,60*60)/60),  2,'0' ) || ':' || 
    lpad(       mod(duration,60),         2,'0' )             as duration_formatted 
from
(
    select 
        co.first_name,
        ca.type,
        ca.duration,
        row_number() over(partition by type order by duration desc) as rn
    from Calls ca
    left outer join Contacts co
    on
        ca.contact_id = co.id
)s1    
where
    rn<=3
order by 
    type desc,
    duration desc,
    first_name desc;

```