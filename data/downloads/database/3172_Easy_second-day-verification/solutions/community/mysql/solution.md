# Simple solution, Beats 97.21%

**Author:** beatricebai
**Votes:** 1
**Link:** [https://leetcode.com/problems/second-day-verification/solutions/5389164/](https://leetcode.com/problems/second-day-verification/solutions/5389164/)

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
# Write your MySQL query statement below

select user_id
from emails e join texts t
on e.email_id = t.email_id 
and date_add(date(signup_date), interval 1 day) = date(action_date)
and signup_action = 'Verified'
order by 1
```