# Row_number and join

**Author:** ohcc28
**Votes:** 0
**Link:** [https://leetcode.com/problems/user-activities-within-time-bounds/solutions/4898708/](https://leetcode.com/problems/user-activities-within-time-bounds/solutions/4898708/)

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
with CTE 
AS
(
select user_id, session_start, session_end, session_id, session_type, row_number()over(partition by user_id order by session_start ) as RN
from Sessions 
)
select distinct s1.user_id
from CTE s1
join CTE s2 
on s1.user_id = s2.user_id 
and s1.RN < s2.RN
and s1.session_type = s2.session_type 
and DATEADD(hour, 12, s1.session_end) >= s2.session_start






```