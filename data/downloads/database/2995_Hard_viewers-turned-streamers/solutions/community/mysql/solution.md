# Simple SQL

**Author:** rnotappl
**Votes:** 2
**Link:** [https://leetcode.com/problems/viewers-turned-streamers/solutions/4547229/](https://leetcode.com/problems/viewers-turned-streamers/solutions/4547229/)

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
WITH CTE AS (
SELECT user_id, min(session_start) as min_time FROM Sessions
GROUP BY user_id
),

CTE1 AS (
SELECT user_id FROM Sessions
WHERE session_type = "Viewer" AND (session_start IN (SELECT min_time FROM CTE))
),

CTE2 AS (
SELECT user_id, count(session_type) as sessions_count FROM Sessions
WHERE session_type = "Streamer" AND (user_id in (SELECT * FROM CTE1))
Group by user_id
)

SELECT * FROM CTE2
ORDER BY sessions_count DESC, user_id DESC



```