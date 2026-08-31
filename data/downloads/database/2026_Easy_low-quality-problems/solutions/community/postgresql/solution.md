# PostgreSQL: where + order by

**Author:** alek_leetc
**Votes:** 1
**Link:** [https://leetcode.com/problems/low-quality-problems/solutions/5083168/](https://leetcode.com/problems/low-quality-problems/solutions/5083168/)

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
select problem_id
from Problems
where likes::float / (likes + dislikes) < 0.6
order by problem_id asc;
```