# MS SQL Server with IN clause

**Author:** nono3
**Votes:** 1
**Link:** [https://leetcode.com/problems/consecutive-available-seats/solutions/1769987/](https://leetcode.com/problems/consecutive-available-seats/solutions/1769987/)

---


```
select seat_id
from cinema
where seat_id in (select a.seat_id from cinema a, cinema b where (abs(a.seat_id - b.seat_id) =1 and a.free=1 and b.free=1))
order by seat_id asc
```