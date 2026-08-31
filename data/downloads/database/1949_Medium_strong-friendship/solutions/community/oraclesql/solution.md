# Oracle | CTE  | Self Join | Count

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/strong-friendship/solutions/5540567/](https://leetcode.com/problems/strong-friendship/solutions/5540567/)

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
    user1_id,
    user2_id
from
    friendship
union
    select
        user2_id,
        user1_id
    from
        friendship)

select
    a.user1_id,
    b.user2_id,
    count(a.user2_id) as common_friend
from
    cte a
join
    cte b on a.user2_id = b.user1_id
        and a.user1_id <> b.user2_id
        and a.user1_id < b.user2_id
where
    (a.user1_id ,b.user2_id) in (select user1_id,user2_id from cte)
having
    count(a.user2_id) >= 3
group by
    a.user1_id,
    b.user2_id
order by
    1,2
```