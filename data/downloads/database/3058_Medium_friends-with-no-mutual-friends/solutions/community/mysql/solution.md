# self join + (xxx, xxx) not in ...

**Author:** zhangmanyuzmy
**Votes:** 2
**Link:** [https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/4802541/](https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/4802541/)

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
-- Create a table with all friend pairs
WITH ALL_PAIRS AS (
    SELECT user_id1 AS user_id,
        user_id2 AS friend_id
    FROM Friends
    UNION ALL 
    SELECT user_id2 AS user_id,
        user_id1 AS friend_id
    FROM Friends
),
-- Create a table with friend pairs that shared mutual friends
SHARED_FRIEND_PAIRS AS (
    SELECT A1.user_id AS user_id1,
        A2.user_id AS user_id2
    FROM ALL_PAIRS A1
    JOIN ALL_PAIRS A2
    ON A1.friend_id = A2.friend_id
)
SELECT user_id1, user_id2
FROM Friends
WHERE (user_id1, user_id2) NOT IN (
    SELECT user_id1, user_id2
    FROM SHARED_FRIEND_PAIRS
)
ORDER BY user_id1, user_id2
```