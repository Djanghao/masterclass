# Oracle solution without JOINs (submitted on Jan 5, 2024)

**Author:** Ihab-Taher
**Votes:** 1
**Link:** [https://leetcode.com/problems/viewers-turned-streamers/solutions/4511986/](https://leetcode.com/problems/viewers-turned-streamers/solutions/4511986/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use analytic functions and no joins

# Approach
<!-- Describe your approach to solving the problem. -->
Get the first session type of each user and then got their streaming sessions for those with first type of Viewer.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
869 ms

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your PL/SQL query statement below */
select user_id, count(*) sessions_count
from (
select user_id, session_type, 
       first_value(session_type) over(partition by user_id order by session_start) frst_sess_type
from Sessions) t1
where t1.frst_sess_type = 'Viewer'
      and t1.session_type = 'Streamer'
group by user_id
order by 2 desc, 1 desc
```