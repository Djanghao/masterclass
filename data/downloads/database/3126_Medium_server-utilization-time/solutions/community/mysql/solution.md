# One liner

**Author:** Stanleyz98
**Votes:** 2
**Link:** [https://leetcode.com/problems/server-utilization-time/solutions/5603924/](https://leetcode.com/problems/server-utilization-time/solutions/5603924/)

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
# servers: server_id, status_time, session_status
select floor(sum(case when session_status='start' then -unix_timestamp(status_time) else unix_timestamp(status_time) end)/(60*60*24)) as total_uptime_days
from servers
```