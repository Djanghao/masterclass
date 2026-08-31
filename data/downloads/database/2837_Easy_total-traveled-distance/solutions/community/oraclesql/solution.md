# Oracle | Sum | Nvl | Group By

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-traveled-distance/solutions/5347775/](https://leetcode.com/problems/total-traveled-distance/solutions/5347775/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your PL/SQL query statement below */
select
    u.user_id,
    u.name,
    nvl(sum(r.distance),0) as "traveled distance"
from
    users u
left join 
    rides r on u.user_id = r.user_id
group by
    u.user_id,
    u.name
order by
    1


```