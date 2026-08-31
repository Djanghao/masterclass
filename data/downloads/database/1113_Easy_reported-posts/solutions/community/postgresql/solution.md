# PostgreSQL solution

**Author:** yukikitayama
**Votes:** 3
**Link:** [https://leetcode.com/problems/reported-posts/solutions/5127382/](https://leetcode.com/problems/reported-posts/solutions/5127382/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
https://youtu.be/kIkE0BfYC_g
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
  extra as report_reason,
  count(distinct post_id) as report_count
from
  actions
where
  action_date = '2019-07-04'
  and action = 'report'
group by
  1
;
```