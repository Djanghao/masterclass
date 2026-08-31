# Simplest solution

**Author:** nitish7dec
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-line/solutions/2345408/](https://leetcode.com/problems/shortest-distance-in-a-line/solutions/2345408/)

---

```

select min(shortest) as shortest from 
(select a.x,b.x as x2,abs(a.x -b.x) as shortest
from 
point a
inner join point b
on a.x != b.x ) e

