# [MySQL] Good enough

**Author:** parrotypoisson
**Votes:** 4
**Link:** [https://leetcode.com/problems/second-degree-follower/solutions/2860533/](https://leetcode.com/problems/second-degree-follower/solutions/2860533/)

---


```SQL []
SELECT f.followee AS follower, COUNT(*) AS num
FROM Follow f
WHERE f.followee IN (SELECT DISTINCT follower FROM Follow)
GROUP BY f.followee
ORDER BY f.followee
```