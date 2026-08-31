# mysql solutions

**Author:** Hailey_lai
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-line/solutions/2380182/](https://leetcode.com/problems/shortest-distance-in-a-line/solutions/2380182/)

---

with al as
(
select p1.x as x1, p2.x as x2,
    abs(p1.x - p2.x) distance
from point p1, point p2
where p1.x != p2.x )

select min(distance) as shortest
from al
