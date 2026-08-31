# Beats 100%

**Author:** vamsI_05
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-degree-follower/solutions/6098152/](https://leetcode.com/problems/second-degree-follower/solutions/6098152/)

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
```postgresql []
-- Write your PostgreSQL query statement below


select followee as follower, count(followee) as num 
from follow
where followee in (select follower from follow)
group by 1
order by 1



```