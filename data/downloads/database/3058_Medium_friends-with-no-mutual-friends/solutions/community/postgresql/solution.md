# Using CTE and Set operation UNION, and EXCEPT

**Author:** nireddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/5676304/](https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/5676304/)

---



# Code
```postgresql []
-- Write your PostgreSQL query statement below

WITH cte AS
(
    SELECT
        user_id1, 
        user_id2
    FROM
        Friends

    UNION

    SELECT 
        user_id2,
        user_id1
    FROM
        Friends
)

(
SELECT 
    user_id1,
    user_id2
FROM
    Friends


EXCEPT

SELECT
    t1.user_id1 AS user_id1, t2.user_id1 AS user_id1
FROM
    cte t1
    JOIN
    cte t2
    ON t1.user_id2 = t2.user_id2 
WHERE
    (t1.user_id1, t2.user_id1) IN (SELECT user_id1, user_id2 FROM Friends)
)
ORDER BY user_id1, user_id2
```