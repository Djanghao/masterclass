# PostgreSQL: window function

**Author:** alek_leetc
**Votes:** 2
**Link:** [https://leetcode.com/problems/running-total-for-different-genders/solutions/5167354/](https://leetcode.com/problems/running-total-for-different-genders/solutions/5167354/)

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
-- Write your PostgreSQL query statement below
select
    gender,
    day,
    sum(score_points) over (
        partition by gender
        order by day
    ) as total
from Scores
```