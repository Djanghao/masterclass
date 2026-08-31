# No Recursive Calls - Easy Oracle Solution

**Author:** minabeshay
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-missing-ids/solutions/1536658/](https://leetcode.com/problems/find-the-missing-ids/solutions/1536658/)

---

```
select rownum as "ids" 
from all_objects 
where rownum <= (select max(customer_id) from customers )
minus 
select customer_id
from customers 
order by 1
```