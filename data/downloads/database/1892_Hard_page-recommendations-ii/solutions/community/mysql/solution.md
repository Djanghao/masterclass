# 85% FASTER | KEY: NULL means these pages are not yet liked by user_id

**Author:** hwf87
**Votes:** 1
**Link:** [https://leetcode.com/problems/page-recommendations-ii/solutions/4385730/](https://leetcode.com/problems/page-recommendations-ii/solutions/4385730/)

---

# Intuition
NULL means these pages are not yet liked by user_id

# Code
```
# Write your MySQL query statement below
# USER1_ID => MySelf
# USER2_ID => Friends
WITH
    all_users AS (
        SELECT
            user1_id AS user_id,
            user2_id AS friend_id
        FROM
            Friendship
        UNION
        SELECT
            user2_id AS user_id,
            user1_id AS friend_id
        FROM
            Friendship
    )
SELECT
    AU.user_id,
    LF.page_id,
    COUNT(LF.user_id) AS friends_likes
FROM
    all_users AU
    LEFT JOIN Likes LF ON AU.friend_id = LF.user_id
    LEFT JOIN Likes LU ON AU.user_id = LU.user_id AND LF.page_id = LU.page_id
WHERE
    -- NULL means these pages are not yet liked by user_id
    LU.page_id IS NULL
GROUP BY
    AU.user_id,
    LF.page_id
```