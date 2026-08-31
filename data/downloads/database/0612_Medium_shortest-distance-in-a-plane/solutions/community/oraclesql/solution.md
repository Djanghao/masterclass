# Oracle Solution

**Author:** ppal87
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/691130/](https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/691130/)

---

```
select distance as shortest from (
select ROUND(SQRT(POWER(B.x-A.x,2) + POWER(B.y-A.y,2)),2) as distance from
point_2d A CROSS JOIN point_2d B
order by 1)
where distance <> 0
and rownum=1
```