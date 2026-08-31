# straightforward MySQL

**Author:** beekwool
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/4285616/](https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/4285616/)

---


# Code
```
# Write your MySQL query statement below

select round(sqrt(power(t2.x-t1.x, 2)+power(t2.y-t1.y, 2)),2) as shortest
from Point2D t1
cross join Point2D t2
having shortest != 0
order by shortest
limit 1
```