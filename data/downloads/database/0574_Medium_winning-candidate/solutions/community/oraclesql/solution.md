# Oracle | Rank | Sub Query

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/winning-candidate/solutions/5367937/](https://leetcode.com/problems/winning-candidate/solutions/5367937/)

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
    name
from
    candidate
where
    id in 
    (select
        candidateid
    from
        (select
            candidateid,
            rank() over (order by count(candidateid) desc) as rnk
        from
            vote
        group by
            candidateid)
    where
        rnk = 1)
    
```