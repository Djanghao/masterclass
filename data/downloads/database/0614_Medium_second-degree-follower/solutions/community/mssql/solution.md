# WHERE IN AND Beating 100%

**Author:** user7363AQ
**Votes:** 2
**Link:** [https://leetcode.com/problems/second-degree-follower/solutions/4375988/](https://leetcode.com/problems/second-degree-follower/solutions/4375988/)

---

# Code
```
-- Write your PostgreSQL query statement below
SELECT followee AS follower, COUNT(follower) num
FROM Follow
WHERE followee IN 
(
    SELECT followee FROM Follow
)
AND followee IN 
(
    SELECT follower FROM Follow
)
GROUP BY followee
ORDER BY followee
```