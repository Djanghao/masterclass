# simple one

**Author:** user1397CM
**Votes:** 1
**Link:** [https://leetcode.com/problems/user-activities-within-time-bounds/solutions/5602122/](https://leetcode.com/problems/user-activities-within-time-bounds/solutions/5602122/)

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
select distinct s1.user_id
from sessions s1
,  sessions s2 
where  s1.session_type=s2.session_type
and s1.user_id=s2.user_id
and s1.session_start < s2.session_start
and extract(epoch from s2.session_start)-extract(epoch from s1.session_end)<=12*60*60
```