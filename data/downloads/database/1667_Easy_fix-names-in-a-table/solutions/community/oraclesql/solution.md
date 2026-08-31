# [ALL DB] Accepted solution

**Author:** yurokusa
**Votes:** 11
**Link:** [https://leetcode.com/problems/fix-names-in-a-table/solutions/1044026/](https://leetcode.com/problems/fix-names-in-a-table/solutions/1044026/)

---

**Oracle**
```
select user_id, initcap(name) name
from Users
order by user_id
```
**MySQL**
```
select user_id
    , concat(
        upper(substring(name,1,1)), lower(substring(name,2,length(name)))
    ) name
from Users
order by user_id
```
**MSSQL**
```
select user_id
    , concat(
        upper(substring(name,1,1)), lower(substring(name,2,len(name)))
    ) name
from Users
order by user_id

```