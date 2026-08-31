# Oracle | Case | Join

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/grand-slam-titles/solutions/5528018/](https://leetcode.com/problems/grand-slam-titles/solutions/5528018/)

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
    p.player_id,
    p.player_name,
    sum((case when c.wimbledon = p.player_id then 1 else 0 end) +
    (case when c.fr_open = p.player_id then 1 else 0 end) +
    (case when c.us_open = p.player_id then 1 else 0 end) +
    (case when c.au_open = p.player_id then 1 else 0 end)) as grand_slams_count
from
    players p
join
    championships c on c.wimbledon = p.player_id or c.fr_open = p.player_id or c.us_open = p.player_id or c.au_open = p.player_id
group by
    p.player_id,
    p.player_name

```