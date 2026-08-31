# Simple query

**Author:** hgocers1230z
**Votes:** 0
**Link:** [https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/5582633/](https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/5582633/)

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
/* Write your T-SQL query statement below */
-- make friendship table
-- find mutual friend list and exlcude them
WITH freindship AS (
    SELECT user_id1, user_id2
    FROM Friends
    UNION ALL
    SELECT user_id2, user_id1
    FROM Friends
)

SELECT f1.user_id1, f1.user_id2
FROM Friends f1
JOIN freindship f2 ON f1.user_id1 = f2.user_id1 -- so f1.id2 and f2.id2 is the friend of f1.id1
LEFT JOIN freindship f3 ON f1.user_id2 = f3.user_id1 AND f2.user_id2 = f3.user_id2 -- so f3.id2 is the friend of f1.id2 or f2.id1
GROUP BY f1.user_id1, f1.user_id2
HAVING COUNT(f3.user_id2) = 0
ORDER BY f1.user_id1 ASC, f1.user_id2 ASC
```