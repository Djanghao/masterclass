# ✅Easiest Basic SQL Solution | 3 Approaches | Beginner to Advance🏆

**Author:** dev_yash_
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-followers-count/solutions/4938475/](https://leetcode.com/problems/find-followers-count/solutions/4938475/)

---

```
#Approach 1-Basic
SELECT 
    user_id,
    COUNT(follower_id) AS followers_count
FROM 
    Followers
GROUP BY 
    user_id
ORDER BY 
    user_id  ASC;
```
```
#Approach 2-Subquey
SELECT 
    user_id,
    (SELECT COUNT(*) FROM Followers AS f2 WHERE f2.user_id = f1.user_id) AS followers_count
FROM 
    (SELECT DISTINCT user_id FROM Followers) AS f1
ORDER BY 
    user_id;
```
```
#Approach 3-Advance
SELECT 
    user_id,
    followers_count
FROM (
    SELECT 
        user_id,
        COUNT(*) AS followers_count
    FROM 
        Followers
    GROUP BY 
        user_id
) AS follower_counts
ORDER BY 
    user_id;

```

