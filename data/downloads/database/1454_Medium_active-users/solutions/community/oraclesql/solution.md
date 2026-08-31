# Oracle - window function, count over intervals (no cross join, no ranking)

**Author:** burento
**Votes:** 6
**Link:** [https://leetcode.com/problems/active-users/solutions/670852/](https://leetcode.com/problems/active-users/solutions/670852/)

---

First remove all dupicates from the login since we are intersted in consecutive days. Next, count how many records there are in a time range of 5 days (this is where the counter over interval comes in). Lastly, collect the users information for display based on the criteria they logged in for 5 consecutive days.
```
with uniq as (
    select distinct l.id, l.login_date from logins l
)
, active as (
    select
        u.id
        , count(*) over (partition by u.id order by u.login_date range between current row and interval '4' day following) cn
    from
        uniq u
)
select distinct
    ac.id
    , ac.name
from
    active a
    inner join accounts ac on a.id = ac.id
where
    a.cn >= 5
order by
    1
```