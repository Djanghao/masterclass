# Oracle | Sum | Left Join

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-apples-and-oranges/solutions/5527851/](https://leetcode.com/problems/count-apples-and-oranges/solutions/5527851/)

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
    sum(b.apple_count + nvl(c.apple_count,0)) as apple_count,
    sum(b.orange_count + nvl(c.orange_count,0)) as orange_count
from
    boxes b
left join
    chests c on b.chest_id = c.chest_id
```