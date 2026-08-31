# 2 methods: lead() or self join

**Author:** zhangmanyuzmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/user-activities-within-time-bounds/solutions/5166734/](https://leetcode.com/problems/user-activities-within-time-bounds/solutions/5166734/)

---

# Approach 1
<!-- Describe your approach to solving the problem. -->
Window function with lead() to get the session_start of next same type session.

# Code 1
```
-- get next session (of same type) info with window function
WITH NEXT_SESSION_INFO AS (
    SELECT *,
           LEAD(session_start) OVER(PARTITION BY user_id, session_type ORDER BY session_start ASC) AS next_session_start
    FROM Sessions
)
SELECT DISTINCT user_id
FROM NEXT_SESSION_INFO
WHERE TIMESTAMPDIFF(HOUR, session_end, next_session_start) <= 12
ORDER BY user_id ASC
```

# Approach 2
<!-- Describe your approach to solving the problem. -->
Self join based on multiple conditions.

# Code 2
```
-- condition 1: userid = userid
-- condition 2: session type = session type
-- condition 3: session start (cur session) < session start (next session)
-- condition 4: session start (next session) - session end (cur session) <= 12hours
SELECT DISTINCT S1.user_id
FROM Sessions S1
INNER JOIN Sessions S2
ON S1.user_id = S2.user_id
AND S1.session_type = S2.session_type
AND S1.session_start < S2.session_start
AND TIMESTAMPDIFF(HOUR, S1.session_end, S2.session_start) <= 12
ORDER BY S1.user_id ASC
```