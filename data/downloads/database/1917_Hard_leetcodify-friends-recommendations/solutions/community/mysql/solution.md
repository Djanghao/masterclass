# MySQL LEFT JOIN easy 3-step beats 100%

**Author:** evergreenyoung
**Votes:** 6
**Link:** [https://leetcode.com/problems/leetcodify-friends-recommendations/solutions/3517424/](https://leetcode.com/problems/leetcodify-friends-recommendations/solutions/3517424/)

---

# Code\r
```\r
# Write your MySQL query statement below\r
WITH Comb AS( # All possible combinations of users with same interests\r
    SELECT DISTINCT a.user_id,b.user_id recommended_id\r
    FROM Listens a JOIN Listens b ON a.user_id < b.user_id\r
    AND a.song_id = b.song_id AND a.day=b.day\r
    GROUP BY user_id,recommended_id,a.day\r
    HAVING COUNT(DISTINCT a.song_id)>=3\r
)\r
, Half AS( # filter friends by left join,get Half of the final answer\r
    SELECT user_id,recommended_id\r
    FROM Comb LEFT JOIN Friendship ON user_id=user1_id AND recommended_id=user2_id\r
    WHERE user1_id IS NULL\r
)\r
# Double it\r
SELECT user_id,recommended_id FROM Half\r
UNION ALL\r
SELECT recommended_id,user_id FROM Half\r
```