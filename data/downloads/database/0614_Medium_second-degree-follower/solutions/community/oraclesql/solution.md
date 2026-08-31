# Beats 100.00%

**Author:** Snap17
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-degree-follower/solutions/6048666/](https://leetcode.com/problems/second-degree-follower/solutions/6048666/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
SELECT
b.follower, a.num as num
FROM
(SELECT followee, COUNT(follower) as num
FROM Follow
GROUP BY followee) a
INNER JOIN
(SELECT follower, COUNT(followee) as num
FROM Follow
GROUP BY follower) b
ON a.followee = b.follower and a.num>=1 and b.num>=1
ORDER BY b.follower
```