# Oracle | CTE | Rank

**Author:** kunalc_14
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-the-pairs-with-the-maximum-number-of-common-followers/solutions/5540625/](https://leetcode.com/problems/all-the-pairs-with-the-maximum-number-of-common-followers/solutions/5540625/)

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
with cte as
    (select
        a.user_id as user1_id,
        b.user_id as user2_id,
        rank() over (order by count (a.follower_id) desc) as rnk
    from
        relations a
    join
        relations b on a.follower_id = b.follower_id 
                    and a.user_id <> b.user_id 
                    and a.user_id < b.user_id
    group by
        a.user_id,
        b.user_id
    order by
        1,2)

select
    user1_id,
    user2_id
from
    cte
where
    rnk = 1

```