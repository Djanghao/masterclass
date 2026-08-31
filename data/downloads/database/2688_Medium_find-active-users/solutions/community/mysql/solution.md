# count()over()

**Author:** cometolife
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-active-users/solutions/3807930/](https://leetcode.com/problems/find-active-users/solutions/3807930/)

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
select
distinct user_id
from
(select
user_id,
count(1)over(partition by user_id order by created_at range between interval 7 day preceding and current row) as rolling_cnt
from Users) as t1
where rolling_cnt > 1
```