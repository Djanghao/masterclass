# MySQL Better than 99.88% using Simple Left Join

**Author:** fun2badult
**Votes:** 2
**Link:** [https://leetcode.com/problems/ad-free-sessions/solutions/1613975/](https://leetcode.com/problems/ad-free-sessions/solutions/1613975/)

---

```
select 
session_id
from playback a 
left join ads b on a.customer_id = b.customer_id and timestamp between start_time and end_time
where timestamp is null
```