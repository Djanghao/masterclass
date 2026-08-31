# A solution without joins

**Author:** vidura
**Votes:** 1
**Link:** [https://leetcode.com/problems/symmetric-coordinates/solutions/5848049/](https://leetcode.com/problems/symmetric-coordinates/solutions/5848049/)

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
```mysql []
# Write your MySQL query statement below
with cte as (
    select X as X, Y as Y from Coordinates where X <> Y group by X, Y
    union all
    select Y as X, X as Y from Coordinates where X <> Y group by Y, X
    union all
    select X as X, Y as Y from Coordinates where X = Y
)
select
    X,
    Y
from
    cte
group by
    X,
    Y
having
    count(*) > 1
    and
    X <= Y
order by
    X,
    Y

```